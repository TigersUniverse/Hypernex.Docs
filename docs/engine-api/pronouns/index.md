# Pronouns

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The pronouns of a User's Bio.

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
NominativeCase | string | The nominative case of the pronoun
AccusativeCase | string | The accusative case of the pronoun
ReflexivePronoun | string | The reflexive case of the pronoun
IndependentGenitiveCase | string | The independent genitive case of the pronoun
DependentGenitiveCase | string | The dependent genitive case of the pronoun
DisplayThree | bool | Whether to display the Nominative, Accusative, and Reflexive or just Nominative and Accusative

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
GetPronounObjectById | [PronounObject](../pronounobject) | Gets an official Pronoun object by Id

**Instance Methods**

Method Name | Return Type | Description
--- | --- | ---
ToString | string | Correctly displays a Users pronouns (The exact same way as the Nameplate does)