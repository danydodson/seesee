
-- Function to find a key in a table
function tableHasKey(table,key)
  return table[key] ~= nil
end;

-- Function to turn a table with only values into a k=>v table
function Set (list)
  local set = {}
  for _, l in ipairs(list) do set[l] = true end
  return set
end;