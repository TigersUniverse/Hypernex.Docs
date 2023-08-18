# MessageChannel

Reliability of a message being sent between the server and the client.

**Enums**

Name | Value | Description
--- | --- | ---
Reliable | 0 | A Reliable Message
ReliableUnordered | 1 | A Reliable Message sent in an Unordered fashion
ReliableSequenced | 2 | A Reliable Message sent in a Sequenced fashion
Unreliable | 3 | An Unreliable Message
UnreliableSequenced | 4 | Un Unreliable Message sent in a Sequenced fashion
Unknown | 5 | Used when MessageChannel could not be parsed. Do not use this.