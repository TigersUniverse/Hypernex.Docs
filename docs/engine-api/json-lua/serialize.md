---
sidebar_position: 1
---

# serialize

Serializes a Table into a JSON string.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
table | Table | The Table to serialize

The example below serializes a lua table.

```lua
local storeInventory = {
    ["Apples"] = 100,
    ["Books"] = 50,
    ["Pencils"] = 1
}
local jsonString = json.serialize(storeInventory)
print(jsonString)
-- Expected Output: "{"Apples": 100, "Books": 50, "Pencils": 1}"
```