# UI

:::info

+ This static class is only available on **LocalScripts**

:::

A toolset that allows users to get/set or register any UI related events.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
SetImageFromAsset | void | Sets an Image attached to an Item to an asset by key
RegisterButtonClick | void | Registers a click from a button attached to an item to call a SandboxFunc
RemoveAllButtonClicks | void | Removes all Button Clicks from a button attached to an item
GetText | string | Gets the text from a supported component attached to an item
SetText | void | Sets the text on a supported component attached to an item
GetToggle | bool | Gets the current value of a toggle attached to an item
RegisterToggleValueChanged | void | Registers a value change from a toggle attached to an item to call a SandboxFunc
RemoveAllToggleValueChanged | void | Removes all toggle value changes from a toggle attached to an item
SetToggle | void | Sets the toggle value on a toggle attached to an item
GetSlider | float | Gets the current value of a slider attached to an item
RegisterSliderValueChanged | void | Registers a value change from a slider attached to an item to call a SandboxFunc
RemoveAllSliderValueChanged | void | Removes all slider value changes from a slider attached to an item
SetSlider | void | Sets the slider value on a slider attached to an item
GetScrollbar | float | Gets the current value of a scrollbar attached to an item
RegisterScrollbarValueChanged | void | Registers a value change from a scrollbar attached to an item to call a SandboxFunc
RemoveAllScrollbarValueChanged | void | Removes all scrollbar value changes from a scrollbar attached to an item
SetScrollbar | void | Sets the scrollbar value on a scrollbar attached to an item
GetInputFieldText | string | Gets the current text of a input field attached to an item
RegisterInputFieldTextChanged | void | Registers a text change from an input field attached to an item to call a SandboxFunc
RemoveAllInputFieldTextChanged | void | Removes all input field text changes from an input field attached to an item
SetInputFieldText | void | Sets the input field text on an input field attached to an item
GetDropdown | int | Gets the current value of a dropdown attached to an item
RegisterDropdownValueChanged | void | Registers a value change from a dropdown attached to an item to call a SandboxFunc
RemoveAllDropdownValueChanged | void | Removes all dropdown value changes from a dropdown attached to an item
SetDropdown | void | Sets the dropwdown value on a dropdown attached to an item
GetColorBlock | [ColorBlock](../colorblock) | Gets a ColorBlock from supported components attached to an Item
SetColorBlock | void | Sets a ColorBlock of a supported component attached to an Item