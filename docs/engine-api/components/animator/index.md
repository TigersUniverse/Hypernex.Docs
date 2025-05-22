# Animator

Interfaces with the Mecanim animation system.

To get an Animator from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let animatorComponent = item.GetComponent("Animator")
```

You can then use the `animatorComponent` property to access the Dropdown class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
IsValid | `void` | `none` | Checks if the component is not null
IsStateName | `bool` | `int`, `string` | Checks if the name matches the name of the active state in the statemachine
IsStateTag | `bool` | `int`, `string` | Checks if the tag matches the tag of the active state in the statemachine
GetBool | `bool` | `string` | Gets the value of the bool parameter by name
GetFloat | `float` | `string` | Gets the value of the float parameter by name
GetInt | `int` | `string` | Gets the value of the int parameter by name
SetBool | `void` | `string`, `bool` | Sets the value of the bool parameter by name
SetFloat | `void` | `string`, `float` | Sets the value of the float parameter by name
SetInt | `void` | `string`, `float` | Sets the value of the int parameter by name
SetTrigger | `void` | `string` | Sets the value of the trigger parameter by name

## Properties

Property Name | Type | Description
--- | --- | ---
Enabled | `bool` | Checks the active state of the component