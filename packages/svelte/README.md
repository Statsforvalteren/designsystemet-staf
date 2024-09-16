# Component library for Statsforvalternes Fellesorganisasjon

This is a component library for Statsforvalternes Fellesorganisasjon. It is built using Svelte and based on the design system provided by Digdir (https://github.com/digdir/designsystemet).
The repository was originally a fork of `digdir/designsystemet` but is now a private copy of said repository. The STAF component library resides under the path `packages/svelte` and the design tokens which designers update via Figma Token Studio are stored in the `design-tokens` folder.

## Adding or updating dependencies

1. In the terminal, navigate to the `/packages/svelte` folder.
2. Run the `yarn install` command.

### Updating design tokens

Once changes to the design tokens have been made in Figma Token Studio, and the new tokens have been pushed to the `design-tokens` folder. Run the following command, from inside the `/packages/svelte` folder, to update the tokens in the component library:

```
yarn updateTokens
```

## Creating new component

1. Examine the React code of the equivalent React component under `packages/react` (this is digdir's implementation of the component).
   1a. If there is no React code, use your own intuition on how to implement the component and skip to step 4.
2. You will have to understand the React implementation in order to create an equivalent implementation in Svelte. You might not be able to use the exact same markup or Javascript logic.
3. In the conversion process, ensure to allow for the same props except those props which are React-specific or otherwise not possible/sensible to implement in a Svelte component.
4. The `componentName.css` from the React-equivalent (located under `packages/css`) can almost be directly copy-pasted into the Svelte component's style block.
5. Ensure your component is exported from the `index.js` inside `/lib/components`.

## Testing your component

1. Add your component to the homepage (`+page.svelte` under `/packages/svelte/src/routes/`) or a route of your choosing.
2. Navigate to the `/packages/svelte` folder in the terminal.
3. Run `npm run dev`.
4. In your browser, navigate to the route you placed the component.
5. You should now be able to iterate over and test your component as you would in a regular Svelte application.

## Documenting your component with Storybook

1. Add a new file in the same folder as your component called `ComponentName.stories.svelte`.'
2. Add the following code to the file:

```svelte
<script module>
   import { setTemplate, defineMeta } from '@storybook/addon-svelte-csf';
   import ComponentName from './ComponentName.svelte';

   const { Story } = defineMeta({
      title: 'Komponenter/ComponentName',
      component: ComponentName,
   });
</script>

<script>
  setTemplate(template);
</script>

{#snippet template(args)}
  <ComponentName {...args} />
{/snippet}

<Story name="Default" />

<Story name="With props" args={{ /* Add props here */ }} />
```

3. Add more `Story` tags with varying properties to display different use-cases of the component.
4. Run `npm run storybook:svelte` from the root folder and open Storybook in your browser.
5. Verify that your component is displayed correctly in Storybook.

## Publishing to Github Packages

This repository is set up to publish the Svelte component library and corresponding design tokens to Github Packages automatically using semantic-release. To trigger the workflow do one of the following:

- Push changes to the `main` branch.
- Push changes to any branch matching the pattern `pr-*` (e.g. pr-new-feature).

When the workflow is triggered, it performs the following steps:

1. **Check for changes in the `design-tokens` directory**:

   - If changes are detected, the `build-and-publish-tokens` job is executed.
   - If no changes are detected, the `build-and-publish-library` job is executed.

2. **Build and Publish**:
   - The project is built.
   - Semantic Release is used to publish the package to the npm registry which in this case is GitHub packages.

To change any of the above settings, you can edit the `.github/workflows/build-and-publish.yml` and `packages/svelte/release.config.cjs` files.

### Semantic Release

As mentioned the automated build and publish process uses Semantic Release. Semantic Release relies on commit messages to determine the type of changes in the codebase and to automate the versioning and changelog generation. Commit messages should follow the Angular Conventional Commits specification (for more info see: https://semantic-release.gitbook.io/semantic-release).

#### Commit Message Format

Each commit message consists of a **type**, an **optional scope**, and a **description**:

`<type>(<scope>): <description>`

The different types relevant for this repository are:

- `fix`: A bug fix (same as patch release)
- `feat`: A new feature (same as minor release)
- `perf`: A code change that improves performance or addes breaking changes (same as major release). (Note that the `BREAKING CHANGE: ...` token must be in the footer of the commit)

Example commit message:

```
feat: Added a new component
```

```
perf: Changed the way the component handles props

BREAKING CHANGE: The component now requires a new prop
```

#### Versioning

Semantic Release analyzes the commit messages and determines the appropriate version bump (major, minor, or patch) based on the changes made. Summarized a commit message with the type `fix` will result in a patch release, `feat` in a minor release, and `perf` (with `BREAKING CHANGE` in the footer of the commit message) in a major release. Once Semantic Release has determined a new version it publishes that version to the npm registry and updates the changelog accordingly.

## Installing from Github Packages

To install the component library and design tokens from GitHub Packages in a Svelte project, you need to authenticate with GitHub Packages. This can be done by logging into the GitHub package registry locally with the following command:

```
npm login --scope=@fmfaDigitalisering --registry=https://npm.pkg.github.com
```

You will be prompted to enter your GitHub username and a personal access token. The personal access token should have the `read:packages` scope.

**Note:** Before creating a personal access token, make sure you have access to the **staf-komponentbibliotek-svelte** repository. (Since you are able to read this documentation, this should already be taken care of.)

Once you have logged in, add a `.npmrc` file to the root of your project with the following content:

```
registry=https://registry.npmjs.org/
@fmfadigitalisering:registry=https://npm.pkg.github.com
```

These lines tell npm to use the GitHub package registry for packages with the `@fmfaDigitalisering` scope, while using the normal npm registry for all other packages.

The last step is to add the packages to your project. This is done by adding the following lines to your `package.json`:

```
"@fmfadigitalisering/staf-komponentbibliotek-svelte": "x.x.x",
"@fmfadigitalisering/staf-design-system-tokens": "x.x.x",
```
