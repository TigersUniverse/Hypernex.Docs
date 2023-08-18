---
sidebar_position: 3
---

# null

Returns a null object for Tables to be represented correctly in JSON.

The following example creates a table with a null value, serializes it into json (see [json.serialize(Table)](serialize) for more information), then prints the result

```lua
local playerInformation = {
    ["Username"] = "Player1234",
    ["Kills"] = 0,
    ["Banner"] = json.null()
}
local jsonString = json.serialize(playerInformation)
print(jsonString)
-- Expected Result: "{"Username": "Player1234", "Kills": 0, "Banner": null}"
```