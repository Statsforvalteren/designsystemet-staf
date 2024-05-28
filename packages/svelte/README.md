WIP Component library for Statsforvalternes Fellesorganisasjon

### Adding or updating dependencies

0. In the terminal, navigate to the /packages/svelte folder
1. Run `yarn install`

### Creating new component

0. Examine the React code of the equivalent React component
   0a. If there is no React code, use your own intuition on how to implement the component and skip to step 4.
1. You will have to understand the React implementation in order to create an equivalent implementation in Svelte. You might not be able to use the exact same markup or Javascript logic.
2. In the conversion process, ensure to allow for the same props except those props which are React-specific or otherwise not possible/sensible to implement in a Svelte component
3. The ComponentName.module.css from the React-equivalent can be directly copy-pasted into the Svelte component's style block
4. Add your component's information in the package.json file in the /packages/svelte folder, under the "exports" key. Looking at existing exported components should be enough to understand the pattern to follow.
5. Ensure your component is exported from the index.js inside /lib/components

### Testing your component

0. Add your component to the homepage or a route of your choosing
1. Navigate to the /packages/svelte folder
2. Run `npm run dev`
3. In your browser, navigate to the route you placed the component
4. You should now be able to iterate over and test your component as you would in a regular Svelte application

### Publishing to Github Packages

This repository is set up to publish the Svelte component library and corresponding design tokens to Github Packages automatically using semantic-release. To publish a new version of the component library use the following commit message conventions:

- fix: A bug fix (same as patch release)
- feat: A new feature (same as minor release)
- perf: A code change that improves performance or addes breaking changes (same as major release). (Note that the `BREAKING CHANGE: ...` token must be in the footer of the commit)

Example commit message:

```
feat: Added a new component
```

```
perf: Changed the way the component handles props

BREAKING CHANGE: The component now requires a new prop
```

For more information on semantic-release, see: https://semantic-release.gitbook.io/semantic-release

**NOTE!: Only changes to the /packages/svelte folder will trigger a release of the component library, whilest changes to the /packages/tokens folder will trigger a release for the design tokens.**
