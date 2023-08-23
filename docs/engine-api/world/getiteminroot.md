# GetItemInRoot

Gets an Item in the Root of the World by Name

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
name | string | The name of the Item (caps sensitive)

The following example gets a template Item, then the first two children, then registers a UI event on the first one.

**JavaScript**
```js
let templates = World.GetItemInRoot("Templates")
let toggle = templates.Children[0]
let target = templates.Children[1]
UI.RegisterToggleValueChanged(toggle, isOn => target.Enabled = isOn)
```

**Lua**
```lua
local templates = World.GetItemInRoot("Templates")
local toggle = templates.Children[0]
local target = templates.Children[1]
UI.RegisterToggleValueChanged(toggle, function(isOn)
    target.Enabled = isOn
end)
```