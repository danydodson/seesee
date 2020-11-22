
local cookie, err = ck:new()

if not cookie then
    ngx.log(ngx.ERR, err)
    return
end

local Ref_field, err = cookie:get("Ref")

if not Ref_field then
    -- No cookie for you
end

-- make JWT
local cjson = require 'cjson'
local jwt = require 'resty.jwt'

local data = ngx.req.get_body_data()
local json = cjson.decode(data)

local jwt_token = jwt:sign(
  'lua-resty-jwt',
  {
    header={typ='JWT', alg='HS256'},
    payload = {
      sub = '1234567890',
      id = json['_id'],
      name = json['name'],
      role = json['role'],
      iss = 'http://www.seesee.space',
      exp = 604800, -- 1 week
    }
  }
)

-- set cookie
local ok, err = cookie:set({key = "Ref", value = jwt_token})
if not ok then
    ngx.log(ngx.ERR, err)
    return
end

-- Return to the same page with the Ref cookie included
return ngx.redirect(ngx.var.request_uri)

ngx.say(jwt_token)
