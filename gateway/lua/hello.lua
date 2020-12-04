-- local cjson = require "cjson"

-- -- First define a json string
-- local json_str ='{"name": "Dany.Dodson", "age": 36}'

-- -- Turn it into an object here, and then output the attributes
-- local json = cjson.decode(json_str)
-- ngx.say("Name = ".. json['name'] .. ", Age =" .. tostring(json['age'])) -- here you need to convert 25 to a string before it can be a string Splicing

-- -- Output Name = Dany.Dodson, Age = 36

-- ngx.say('<br/>') -- line break

-- -- Next we will convert the json object into a json string
-- local json_str2 = cjson.encode(json)
-- ngx.say(json_str2)

-- -- Output {"name":"Dany.Dodson","age":36}

-- ngx.say('<br/>') -- line break

-- local obj = {
--   ret = 200,
--   msg = "login success"
-- }

-- ngx.say(cjson.encode(obj))

-- ngx.say('<br/>') -- line break

-- local obj2 = {}

-- obj2['ret'] = 200
-- obj2['msg'] = "login fails"

-- ngx.say(cjson.encode(obj2))