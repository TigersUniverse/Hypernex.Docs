# Network

Network is used to send data from the Client to the Server and the Server to the Client.

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
[SendToServer](./sendtoserver.md) | `void` | `string`, `object`[], [MessageChannel](./../../messagechannel/index.md) | Sends data to the server (Client-only)
[SendToClient](./sendtoclient.md) | `void` | `string`, `string`, `object`[], [MessageChannel](./../../messagechannel/index.md) | Sends an object data array to a client (Server-only)
[SendToAllClients](./sendtoallclients.md) | `void` | `string`, `object`[], [MessageChannel](./../../messagechannel/index.md) | Sends an object data array to all clients (Server-only)