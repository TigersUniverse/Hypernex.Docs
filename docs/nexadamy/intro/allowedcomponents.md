# Allowed Components

Components are stripped into numerous categories:

+ Built-In-Minimum
+ Scripting
+ Physics
+ Audio
+ UI
+ Light
+ Particle
+ Extra-Avatar
+ Extra-World

Each category is listed in further detail below.

## Built-In-Minimum

Built-In-Minimum technically has three subcategories.

### Built-In-Minimum (again)

The types that are available on all content.

**Hypernex Components**

+ `AssetIdentifier`
+ `MaterialDescriptor`

**Unity Components**

+ `AimConstraint`
+ `Animation`
+ `Animator`
+ `LookAtConstraint`
+ `MeshFilter`
+ `MeshRenderer`
+ `ParentConstraint`
+ `PositionConstraint`
+ `RotationConstraint`
+ `ScaleConstraint`
+ `SkinnedMeshRenderer`
+ `Transform`

### Avatar

Avatar-only minimum types. Also includes the Built-In-Minimum subcategory's types.

**Hypernex Components**

+ `Avatar`
+ `FaceTrackingDescriptor`

### World

World-only minimum types. Also includes the Built-In-Minimum subcategory's types.

**Hypernex Components**

+ `World`
+ `GrabbableDescriptor`
+ `NetworkSyncDescriptor`
+ `RespawnableDescriptor`
+ `VideoPlayerDescriptor`

**Unity Components**

+ `ReflectionProbe`
+ `Volume`
+ `Camera`
+ `FlareLayer`
+ `UniversalAdditionalCameraData`
+ `Mirror`

**SteamAudio Components**

+ `SteamAudioSource`
+ `SteamAudioGeometry`
+ `SteamAudioDynamicObject`
+ `SteamAudioProbeBatch`
+ `SteamAudioBakedSource`
+ `SteamAudioBakedListener`
+ `SteamAudioAmbisonicSource`
+ `SteamAudioStaticMesh`

## Scripting

Includes any type of Script. Does not matter if the script is in a World/Avatar component or a separate component.

**Hypernex Components**

+ `LocalScript`

## Physics

Any components that have to do with physics.

**Unity Components**

+ `Rigidbody`
+ `Cloth`
+ `Collider`
+ `CharacterJoint`
+ `ConfigurableJoint`
+ `FixedJoint`
+ `HingeJoint`
+ `SpringJoint`

**MagicaCloth2 Components**

:::note

MagicaCloth2 is a paid assembly. Your build of Hypernex.Unity may not have this.

:::

:::warning

MagicaCloth is **NOT** supported! You **must** have [MagicaCloth2](https://assetstore.unity.com/packages/tools/physics/magica-cloth-2-242307)

:::

+ `MagicaCloth`
+ `MagicaCapsuleCollider`
+ `MagicaPlaneCollider`
+ `MagicaSphereCollider`
+ `MagicaWindZone`

**AkBoneDynamics Components**

+ `AkBoneDynamics`
+ `AkBDCollider`
+ `AkBDCapsuleCollider`
+ `AkBDSphereCollider`
+ `AkBDPlaneCollider`

## Audio

Anything audio related.

**Unity Components**

+ `AudioSource`

## UI

Any sort of User Interface that may or may not be interactive.

**Unity Components**

+ `Canvas`
+ `CanvasRenderer`

**uGUI (Unity UI) Components**

+ `Button`
+ `Slider`
+ `Toggle`
+ `Image`
+ `RawImage`
+ `LayoutElement`
+ `RectMask2D`
+ `CanvasScaler`
+ `GraphicRaycaster`
+ `HorizontalLayoutGroup`
+ `VerticalLayoutGroup`
+ `GridLayoutGroup`
+ `ScrollRect`
+ `Scrollbar`
+ `Selectable`
+ `Outline`
+ `PositionAsUV1`
+ `Shadow`
+ `Mask`
+ `TMP_Text`
+ `TMP_Dropdown`
+ `TMP_InputField`
+ `TextMeshPro`
+ `TextMeshProUGUI`

## Light

Anything relating to lights or physics with lights.

**Unity Components**

+ `Light`
+ `LightProbeGroup`
+ `UniversalAdditionalLightData`

**AkBoneDynamics Components**

+ `AkBoneDynamicsLight`

## Particle

Anything relating to particles or particle systems.

**Unity Components**

+ `ParticleSystem`
+ `ParticleSystemRenderer`
+ `LineRenderer`
+ `TrailRenderer`