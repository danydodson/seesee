-- lib = {}

-- function lib.ping_redis()
--   local nginx_auth = require 'nginx-auth'
--   local ngx_auth = nginx_auth:new()
--   ngx_auth:redis_connect()
--   ngx_auth.redis:set('PING', 'redis_pong')

--   local val, error = ngx_auth.redis:get('PING')

--   if not val then
--     return nil, error
--   end

--   ngx_auth:close()
--   return val
-- end

-- function lib.ping_auth_center()
--   local nginx_auth = require 'nginx-auth'
--   local ngx_auth = nginx_auth:new()

--   local res, err = ngx_auth.http:request_uri(os.getenv('AUTH_CENTER') .. '/ping', {
--     method = 'GET',
--     headers = { ['Content-Type'] = 'text/plain', }
--   })

--   if not res then
--     ngx.say('failed to request: ', err)
--     return
--   end

--   ngx.status = res.status
--   ngx.say(res.body)
-- end

-- function lib.ping_web_backend()
--   local nginx_auth = require 'nginx-auth'
--   local ngx_auth = nginx_auth:new()

--   local res, err = ngx_auth.http:request_uri(os.getenv('WEB_BACKEND') .. '/ping', {
--     method = 'GET',
--     headers = { ['Content-Type'] = 'text/plain', }
--   })

--   if not res then
--     ngx.say('failed to request: ', err)
--     return
--   end

--   ngx.status = res.status
--   ngx.say(res.body)
-- end

-- return lib