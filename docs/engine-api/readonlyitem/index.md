# ReadonlyItem

:::info

This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

ReadonlyItems are the exact same as [Item](../item)s, except all properties are Read only, and all methods return ReadonlyItems.

:::warning

+ This type CANNOT be networked! Attempting to serialize a Network Message will fail!
+ Items **CANNOT** be created by the client. Attempting to instantiate an Item will throw an Exception.

:::

Please refer to [Item](../item) for documentation.