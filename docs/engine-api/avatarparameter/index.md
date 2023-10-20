# AvatarParameter

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**
+ This class cannot be instantiated

:::

The AvatarParameter class displays current Avatar Parameter information, and allows parameters to be updated.

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
[Name](name.md) | string | (Readonly) Gets the name of the parameter
[Type](type.md) | [AvatarParameterType](../avatarparametertype/index.md) | (Readonly) Gets the Type of Parameter
[IsVisible](isvisible.md) | bool | (Readonly) Returns true if the parameter is visible on the CurrentAvatar page

**Instance Methods**

Method Name | Return Type | Description
--- | --- | ---
[GetValue](getvalue.md) | object | Gets the current value of a parameter
[SetValue](setvalue.md) | void | Sets the current value of a parameter