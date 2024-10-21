# Pronouns

Gets a User's pronouns

The following example will gender you correctly. Assuming this script is running in a **LocalScript**.

:::note

Please be sure to check if a specific case or pronoun is empty! (For example, there is no ReflexivePronoun for "Ask")

:::

**JavaScript**
```js
let World = instance.GetHandler("World")
let Players = instance.GetHandler("Players")

let uiTextObject = World.GetItemInRoot("OwnerText").GetComponent("Text")
let pronouns = Players.LocalPlayer.Pronouns
uiTextObject.SetText("This text is " + pronouns.IndependentGenitiveCase + "!")
```

**Lua**
```lua
local World = instance.GetHandler("World")
local Players = instance.GetHandler("Players")

local uiTextObject = World.GetItemInRoot("OwnerText").GetComponent("Text")
local pronouns = Players.LocalPlayer.Pronouns
uiTextObject.SetText("This text is "..pronouns.IndependentGenitiveCase.."!")
```