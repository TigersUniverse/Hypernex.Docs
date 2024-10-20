# Network

Network is used to send data from the Client to the Server.

:::warning

The Network handler is **NOT** available on LocalAvatarScripts!

:::

To get the Network class, you must [get its handler](./../index.md).

```js
let Network = instance.GetHandler("Network")
```

You can then use the `Network` property to access the Network class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
[SendToServer](./sendtoserver.md) | `void` | `string`, `object[]`, [MessageChannel](./../../messagechannel/index.md) | Sends data to the server