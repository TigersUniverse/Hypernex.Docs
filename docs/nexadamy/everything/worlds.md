---
sidebar_position: 0
---

# Worlds

<details><summary>Like Videos?</summary>
<p>

<iframe width="100%" style={{"aspect-ratio": "16 / 9"}} src="https://player.vimeo.com/video/995631072?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Hypernex Tutorials: Creating a World"></iframe>

Here's a video tutorial on setting up a world in Hypernex

</p>
</details>

## Setting Up

When starting, create a new GameObject in the scene you have the world in. After creating that GameObject, go ahead and add a `World` component to it.

![world component](./img/world-component.png)

The World component describes all the information about the world and the current scene.

:::tip

Most of the configurable information in the World component is also scriptable.

:::

## Configuring the World Component

The World component has plenty of various options and configurations to ensure your world has the correct 'feel' to it.

Below are the explanations to all of the properties in the World component.

**Allow Respawn** - Defines if a user is allowed to respawn from their menu

**Allow Running** - Defines if a user is allowed to run

**Allow Avatar Scaling** - Allows a user to scale their avatar

**Lock Avatar Switching** - Sets if a user is allowed to switch avatars

**Walk Speed** - The normal walk speed

**Run Speed** - The normal run speed

**Jump Height** - How high the player jumps

**Gravity** - The direction of the gravity

**Spawn Points** - A list of GameObjects that are used as spawn locations

**Local Scripts** - A list of Local Scripts to execute on the client

:::tip

Local Scripts can also be attached to GameObjects with the `LocalScript` component.

:::

**Server Scripts** - A list of scripts that will be executed on the server

:::note

ServerScripts are different than LocalScripts and they have different forwarded Spaces. [See the docs for more information](/docs/engine-api/)

:::

**Local Script Assets** - A list of Unity Objects than can be accessed by LocalScripts

<details><summary>Other World-Related Components</summary>
<p>

<span className="semi-bigger-text">RespawnableDescriptor</span><br />

The RespawnableDescriptor describes how much lower a Rigidbody needs to be below the lowest point in a world before it is respawned.

<span className="semi-bigger-text">NetworkSyncDescriptor</span><br />

The NetworkSyncDescriptor describes all of the properties of a GameObject that should be synced across the network.

<span className="semi-bigger-text">GrabbableDescriptor</span><br />

The GrabbableDescriptor describes how a GameObject can be grabbed and moved in-game.

<span className="semi-bigger-text">VideoPlayerDescriptor</span><br />

:::note

There is a VideoPlayer prefab available [here](https://github.com/TigersUniverse/Hypernex.Unity.Gizmos/tree/main/Hypernex.VideoPlayer)

:::

The VideoPlayerDescriptor defines properties for IVideoPlayers to work off of.

<span className="semi-bigger-text">MaterialDescriptor</span><br />

The MaterialDescriptor will automatically switch materials on MeshRenderers depending on the Build Target of the game.

</p>
</details>

## Finishing Up

Once you have completed your World component, you should be able to see it appear in your CCK Builder window. From here you can continue to [upload the world](./uploading.md).