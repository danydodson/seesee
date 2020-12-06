--

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

ngx.say(jwt_token)