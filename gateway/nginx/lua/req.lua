--

local _M = {}

-- Get get/post req params
function _M.getArgs()

  local args = ngx.req.get_uri_args()
  local request_method = ngx.var.request_method

  -- Param acquisition
  if 'POST' == request_method then

    ngx.req.read_body()
    local postArgs = ngx.req.get_post_args()

    if postArgs then
      for k, v in pairs(postArgs) do
        args[k] = v
      end
    end

  end

  return args

end

return _M