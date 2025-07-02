# Installing

As you may have noticed, there are no more unitypackage files. That is because we now use [OpenUPM](https://openupm.com), a package manager, to manage all of our assets. 

## Installing via. Unity Package Manager

To get started, simply open your Package Manager Settings (`Edit > Project Settings > Package Manager`) and add a new scoped registry with the following values:

Name: `package.openupm.com`
URL: `https://package.openupm.com`
Scope(s): `dev.hypernex` (add another scope if you already have one)

After adding this, you can then open the Package Manager window (`Window > Package Manager`) and select `My Registries` and you should see all the Hypernex CCK Packages! Below are some links to the Package's OpenUPM page

+ [Hypernex.CCK.Unity](https://openupm.com/packages/dev.hypernex.cck.unity/) - Base Hypernex CCK. Contains basic descriptor components and useful Editor/Runtime utilities
+ [Hypernex.CCK.Unity.Editor](https://openupm.com/packages/dev.hypernex.cck.unity.editor/) - Editor Hypernex CCK. Contains window painters and Editor utilities along with Content Builders. Requires the Base package.
+ [Hypernex.CCK.Unity.Emulator](https://openupm.com/packages/dev.hypernex.cck.unity.emulator/) - Emulator for the Hypernex CCK. Requires the Base and Editor package.

## Installing via. OpenUPM CLI

:::caution

This section is for more advanced users. This requires you have basic CLI knowledge.

:::

OpenUPM also has a CLI that you can use and install to manage assets easier. To install the [OpenUPM CLI](https://openupm.com/docs/getting-started-cli.html#installing-openupm-cli), simply run the following command

:::note

OpenUPM CLI required [Node.js 16 or above](https://nodejs.org/en/download/)

:::

```bash
npm install -g openupm-cli
```

Then, you can navigate to your Unity project directory and run the `Install via command-line interface` command on our package's webpage (see above).

## Post Install

After you install the Hypernex CCK for the first time, the editor will restart a few times. This is intended behavior. The editor is simply installing our required packages and setting up an environment similar to our build.