### @ensono-stacks/azure-node:app-insights

<details>
<summary>Installs and configures App Insights in your NodeJS app.</summary>

This generator will add and configure [applicationinsights](https://www.npmjs.com/package/applicationinsights) npm package for you.

## Prerequisites


Requires a NodeJs server for application insights to hook into.

:::tip

Use the [@nrwl/next:custom-server](https://nx.dev/packages/next/generators/custom-server) generator which will have been added to your workspace by [`@ensono-stacks/workspace`](../workspace/plugin-information.md) to generate your NodeJS server!

:::

It requires the App Insights Access Key to be set in an env variable, from which it will be read.

## Usage

```bash
nx generate @ensono-stacks/azure-node:app-insights
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                                               | Type      | 
| ---               | --------------------------------------------------------- | ---       | 
| --project         | Target project name.                                      | string    | 
| --appInsightsKey  | The env variable that stores the app insights key.        | string    | 
| --server          | Path to custom server file inside the project.            | string    | 

### Generator Output

- Adds `applicationinsights` dependency in `package.json`.
- Extends `main()` function in the server file to initialise and configure app insights.

</details>