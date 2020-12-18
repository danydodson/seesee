
local cjson = require 'cjson'
local jwt = require 'resty.jwt'
local resty_cookie = require 'resty.cookie'

local data = ngx.req.get_body_data()
local json = cjson.decode(data)

local jwt_token = jwt:sign(
  os.getenv('JWT_SECRET'),
  {
    header={typ='JWT', alg='HS256'},
    payload = {
      sub = '1234567890',
      name = json['name'],
      email = json['email'],
      role = json['role'],
      iss = 'http://www.seesee.space',
      iat = ngx.time(),
      exp = ngx.time() + 60 * 13,
      -- exp = 604800, -- 1 week
    }
  }
)

local cookie = resty_cookie:new()

cookie:set({
  key = "token",
  value = jwt_token
})