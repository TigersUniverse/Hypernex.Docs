# IsAvatarItem

Checks if an [Item](./../item/index.md) **OR** [ReadonlyItem](./../readonlyitem/index.md) is a child of the LocalAvatar

**Overload 1 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
item | [item](./../item/index.md) | The Item to check

**Overload 2 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
item | [ReadonlyItem](./../readonlyitem/index.md) | The ReadonlyItem to check

The following example is provided an Item and checks if it is a child of the LocalAvatar

**JavaScript**
```js
// Assume item has been declared and is an Item
if(LocalAvatar.IsAvatarItem(item))
{
    print(Item.Name + " is a child of the Avatar!")
    return
}
print(Item.Name + " is not a child of the Avatar!")
```

**Lua**

```lua
-- Assume item has been declared and is an Item
if LocalAvatar.IsAvatarItem(item) then
    print(Item.Name.." is a child of the Avatar!")
    return
end
print(Item.Name.." is not a child of the Avatar!")
```