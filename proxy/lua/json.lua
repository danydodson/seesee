local cjson = require "cjson"

-- First define a json string
local json_str ='{"name": "Bruce.Lin", "age": 25}'

-- Turn it into an object here, and then output the attributes
local json = cjson.decode(json_str)

-- here you need to convert 25 to a string before it can be a string Splicing
ngx.say("Name = ".. json['name'] .. ", Age =" .. tostring(json['age']))

-- Output Name = Bruce.Lin, Age = 25

-- line break
ngx.say('<br/>')

-- Next we will convert the json object into a json string
local json_str2 = cjson.encode(json)
ngx.say(json_str2)

-- Output {"name":"Bruce.Lin","age":25}

-- line break
ngx.say('<br/>')

local obj = {
ret = 200,
msg = "login success"
}

ngx.say(cjson.encode(obj))

-- line break
ngx.say('<br/>')

local obj2 = {}

obj2['ret'] = 200
obj2['msg'] = "login fails"

ngx.say(cjson.encode(obj2))
