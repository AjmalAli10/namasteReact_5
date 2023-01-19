# namasteReact_5

## What is the difference between `Named` export, `Default` export and `* as`  export?

### In `Named` export - Usually, It uses when you have a different modules in a single file then use `Named`export
### In `Default` export - It get uses when you need to export one file and you can only use one time for `default` export in a single module.
### `* as` exports - `*` in export to `re-export` all the exports from another module. This allows you to make the exports from one module available under a different name in another module.For example, you could have a module named `moduleA` with the following exports:
`
export const variable1 = 'value1'; `
`
export const variable2 = 'value2';
`
### And you could have another module named `moduleB` that re-exports the exports from `moduleA`:
`export * from 'moduleA';`
### With this, the `moduleB` exports all the exports of `moduleA` under the `same name`, so you can use `variable1` and `variable2` in your code after importing `moduleB`. You can also use `* as` while re-exporting to give new names to the exported items.
`export * as myModuleA from 'moduleA'; `
### With this, the `moduleB` exports all the exports of `moduleA` under the name `myModuleA`, so you can use `myModuleA.variable1` and `myModuleA.variable2` in your code after importing `moduleB`.
---
## What are React Hooks?
### React Hooks is at the end of the day, It is a function created by React developer for various use cases. We use React Hooks in `functional component` and every `Hooks function's` name start from `use`.
`Like - useEffect, useState, useRef, useMemo and etc. `

## Why do we need a Hook?
### When Component want to insync with UI then we can `useState`. because whenever component changes. it need to remember thier state of change so that It will insync with UI That's why we import `useState` from `"react"`.
