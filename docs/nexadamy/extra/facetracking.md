# Face Tracking

Facial Tracking in Hypernex is powered by a fork of [VRCFaceTracking](https://github.com/TigersUniverse/VRCFaceTracking) aimed to bring support to all versions of Microsoft's .NET and Mono.

If you are interested in learning more about what VRCFaceTracking is, check out their [docs website](https://docs.vrcft.io/)!

<details><summary>Want more Specifics?</summary>
<p>

With using VRCFaceTracking, it brings its own advantages and disadvantages, mainly due to the complexity of the project.

<span className="semi-bigger-text">Advantages of using VRCFaceTracking</span><br />

VRCFaceTracking is ahead of the game when it comes to both community support and tracking reliability. When it comes down to their [Unified Expressions](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes), quality is unmet by any other Facial Tracking provider, while still providing support for all [other standards](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/compatibility/overview).

On top of having improved expressions, they also have the community behind them. As of writing, their community server has over 5k members and their repository has over 800 commits. There is clear evidence of continuous support and passion behind everything they do. This makes it incredibly great for creators to work with when it comes to support, as it does not have to be generalized to just Hypernex, but can be extended to all of VRCFaceTracking.

<span className="semi-bigger-text">Disadvantages of using VRCFaceTracking</span><br />

The biggest disadvantage to all of it, is since our fork needs to run in any version of .NET, it also requires *all modules* to be recompiled. While most modules are fairly easy to recompile and keep up-to-date, some require small changes in code to ensure they run correctly on all platforms. This can be very time consuming, especially after a big VRCFaceTracking update, where everything would have to be recompiled again to support the latest version.

Another disadvantage is completely changing how VRCFaceTracking works at its core. VRCFaceTracking is designed to be an OSC application; however, our fork aims to remove (or really disable) that feature and pull data *[oddly](https://github.com/TigersUniverse/Hypernex.Unity/blob/main/Assets/Scripts/ExtendedTracking/VRCFTParameters.cs)*. This complicated code, required to extend VRCFaceTracking support without OSC, makes it more difficult for developers to contribute to our own project.

<span className="semi-bigger-text">So... Is it a good thing?</span><br />

Fortunately, because of our contributors, we can make the job a little easier on the users and creators. Below are some precompiled modules which are ready to go for any version of our VRCFaceTracking!

</p>
</details>

## Modules

Select the dropdown from the list below depending on which hardware you own.

:::caution Don't see your Hardware?

This means that the module you wish to use has not been converted to use our fork. Please contribute towards converting [VRCFaceTracking modules](https://docs.vrcft.io/docs/category/hardware-guides)!

:::

<details><summary>Vive Pro Eye/Vive Lip Tracker</summary>
<p>

+ [SRanipalTrackingModule](https://github.com/TigersUniverse/SRanipalTrackingModule) - Adds support for the Vive Pro Eye and the Vive Lip Tracker

</p>
</details>

<details><summary>Meta Quest Pro</summary>
<p>

+ [VirtualDesktop.VRCFaceTracking](https://github.com/TigersUniverse/VirtualDesktop.VRCFaceTracking) - Adds support for Virtual Desktop Face Tracking
+ [LinkFT](https://github.com/TigersUniverse/LinkFT) - Adds support for SteamLink Face Tracking
+ [VRCFT-ALVR](https://github.com/TigersUniverse/VRCFT-ALVR) - Adds support for ALVR Face Tracking

</p>
</details>

<details><summary>HP Reverb G2 Omnicept Edition</summary>
<p>

+ [VRCFTOmniceptModule](https://github.com/TigersUniverse/VRCFTOmniceptModule) - Adds support for HP Omnicept eye tracking

</p>
</details>

<details><summary>Mobile</summary>
<p>

+ [VRCFaceTracking-LiveLink](https://github.com/TigersUniverse/VRCFaceTracking-LiveLink) - Adds support for the Live Link app
+ [VRCFaceTracking-MeowFace](https://github.com/TigersUniverse/VRCFaceTracking-MeowFace) - Adds support for the MeowFace app

</p>
</details>

<details><summary>Custom</summary>
<p>

+ [ETVRTrackingModule](https://github.com/TigersUniverse/ETVRTrackingModule) - Adds support for ETVR
+ [VRCFT-Babble](https://github.com/TigersUniverse/VRCFT-Babble) - Adds support for Babble

</p>
</details>

## Other Projects using VRCFaceTracking

Hypernex 💙 shouting out other developers who use our software to improve theirs. Below are some uses of our VRCFaceTracking fork outside of Hypernex!

+ [VRCFT2CVR](https://github.com/200Tigersbloxed/VRCFT2CVR) - Adds VRCFaceTracking to ChilloutVR
