# NetworkEvent

:::info

+ This class is only available on **ServerScripts** and **LocalScripts**
+ This instance of a class should be accessed through its static object `NetworkEvent`
+ Certain methods may only be available on certain scripts

:::

NetworkEvents are used to send data between the Server and Client and vice versa.

**Instance Methods**

Name | Return Type | Description
--- | --- | ---
[SendToClient](sendtoclient.md) | void | Sends an object data array to a client (Server Only)
[SendToAllClients](sendtoallclients.md) | void | Sends an object data array to all clients (Server Only)
[SendToServer](./../handlers/events/sendtoserver.md) | void | Sends an object data array to the server (Client Only)