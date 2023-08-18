---
sidebar_position: 1
---

# stringify

Serializes a JavaScript object into a JSON string.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
value | Object | The Object to serialize

The example below serializes a simple object

```js
let storeInventory = {
    "Apples": 100,
    "Books":  50,
    "Pencils": 1
}
let jsonString = JSON.stringify(storeInventory)
print(jsonString)
// Expected Output: "{"Apples": 100, "Books": 50, "Pencils": 1}"
```