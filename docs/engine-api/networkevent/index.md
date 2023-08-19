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
[SendToClient](sendtoclient) | void | Sends an object data array to a client
[SendToAllClients](sendtoallclients) | void | Sends an object data array to all clients
[SendToServer](sendtoserver) | void | Sends an object data array to the server