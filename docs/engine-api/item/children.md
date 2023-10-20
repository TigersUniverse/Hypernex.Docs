---
sidebar_position: 3
---

# Children

An array of children items.

The following example demonstrates looping through each item child and printing its name.

:::note

Usually, you would want to use [ChildCount](./childcount) and [GetChildByIndex](./getchildbyindex) instead of iterating through Children. This is only an example.

:::

**JavaScript**
```js
// Assume an Item named item is defined here
let children = item.Children
for(let i = 0; i < children.length; i++){
    let childItem = children[i]
    print(childItem.Name)
}
```

**Lua**
```lua
-- Assume an Item named item is defined here
local children = item.Children
for _, child in ipairs(children) do
    print(child.Name)
end
```