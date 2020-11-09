

-- local data = ngx.req.get_body_data() -- requires: lua_need_request_body on; added to nginx.conf

-- GET
-- local args = ngx.req.get_uri_args() -- here is a table containing all get request parameters
-- local id = ngx.var.arg_id -- Get a single request parameter here, but if this parameter is not passed, an error will be reported. The above method is recommended

-- POST
-- ngx.req.read_body() -- read the request body first
-- local args = ngx.req.get_post_args() -- This is also a table, containing all post request parameters

-- The http request method can be obtained by the following method
-- local request_method = ngx.var.request_method -- GET or POST

-- ngx.say(data)

local req = require 'req'

local args = req.getArgs()

local name = args['name']

if name == nil or name == '' then
  name = 'guest'
end

ngx.say('<p>hello '.. name .. '!</p>')