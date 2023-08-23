# GetChildByName

Returns a child by name. Null if a child is not found.

:::note

+ You can also use GetChildByName to find an Item by path!
  + For example `name` would return the child first named `name`
  + `name/item1` would find a child named `name`, then find a child in there named `item1`
  + See [Transform.Find](https://docs.unity3d.com/ScriptReference/Transform.Find.html) for more information

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
name | string | The name or path to the Item.

The following example gets a child named `deathItem` under a child named `tool`.

**JavaScript**
```js
// Assume an Item is defined as item
let death = item.GetChildByName("tool/deathItem")
```

**Lua**
```lua
-- Assume an Item is defined as item
local death = item.GetChildByName("tool/deathItem")
```