-- local lib = { _VERSION = '0.0.1', }
-- local mt = { __index = lib }

-- function lib.new(_)
--   local _r = require 'resty.redis'
--   local _h = require 'resty.http'

--   local http = _h.new()
--   local redis = _r:new()

--   return setmetatable({ redis = redis, http = http}, mt)
-- end

-- function lib.redis_connect(self)
--   local redis = self.redis
--   return redis:connect(os.getenv('REDIS'), 6379)
-- end

-- function lib.check_blacklist(self, jwt)
--   local redis = self.redis
--   self:redis_connect()
--   return redis:get('black_' .. jwt)
-- end

-- function lib.check_whitelist(self, jwt)
--   local redis = self.redis
--   self:redis_connect()
--   return redis:get('white_' .. jwt)
-- end

-- function lib.validate_jwt(self, jwt)

-- end

-- function lib.check_jwt(self, jwt)
--   local http = self.http
--   local nginx_auth = require 'nginx-auth'
--   local ngx_auth = nginx_auth:new()

--   local res, err = ngx_auth.http:request_uri(os.getenv('AUTH_CENTER') .. '/check_jwt', {
--     method = 'POST',
--     headers = {
--       ['Authentication'] = jwt,
--       ['Content-Type'] = 'application/json',
--     }
--   })

--   if not res then
--     ngx.say('failed to request: ', err)
--     return
--   end

--   ngx.status = res.status
-- end

-- function lib.close(self)
--   local redis = self.redis

--   if not redis then
--       return nil, 'not initialized'
--   end

--   return redis:close()
-- end

-- return lib