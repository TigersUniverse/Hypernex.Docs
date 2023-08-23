# GetChildByIndex

Gets a child Item by index. Null if the item is out of bounds.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
i | int | The target child by index

The following example gets a random child and prints its name.

**JavaScript**
```js
// Assume an Item has been defined as item
if(item.ChildCount <= 0) return
let randomChildIndex = Math.floor(Math.random() * item.ChildCount)
let childItem = item.GetChildByIndex(randomChildIndex)
print(childItem.Name)
```

**Lua**
```lua
-- Assume an Item has been defined as item
if item.ChildCount <= 0 then return end
-- While indexes in lua start with 1, GetChildByIndex should still start at 0. If you want to index with lua schematics, use Item.Children
local randomChildIndex = math.random(0, item.ChildCount - 1)
local childItem = item.GetChildByIndex(randomChildIndex)
print(childItem.Name)
```