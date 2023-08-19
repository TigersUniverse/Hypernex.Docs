# GetPronouns

Gets a User's pronouns

The following example will gender you correctly. Assuming this script is running in a **LocalScript** (only because World and UI is being used).

:::note

Please be sure to check if a specific case or pronoun is empty! (For example, there is no ReflexivePronoun for "Ask")

:::

**JavaScript**
```js
let uiTextObject = World.GetItemInRoot("OwnerText")
let pronouns = LocalAvatar.GetPronouns()
UI.SetText(uiTextObject, "This text is " + pronouns.IndependentGenitiveCase + "!")
```

**Lua**
```lua
local uiTextObject = World.GetItemInRoot("OwnerText")
local pronouns = LocalAvatar.GetPronouns()
UI.SetText(uiTextObject, "This text is "..pronouns.IndependentGenitiveCase.."!")
```