# nant-es-core

## Architecture

- monorepo
- Packager Manager: pnpm
- Programming Language: TypeScript
- Lint: ESLint
- Code Formatting: Prettier
- Pre-commit hook validator: Husky
- Linting only staged files: Lint-staged
- Lint git commit subject: commitLint


```
nant-es-core
├─ .npmignore
├─ .npmrc
├─ README.md
├─ biome.json
├─ docs
├─ lerna.json
├─ nx.json
├─ package.json
├─ packages
│  ├─ internal
│  │  ├─ README.md
│  │  ├─ dist
│  │  │  ├─ comparison
│  │  │  │  ├─ index.d.mts
│  │  │  │  ├─ index.d.ts
│  │  │  │  ├─ index.js
│  │  │  │  ├─ index.mjs
│  │  │  │  ├─ isCallable.d.mts
│  │  │  │  ├─ isCallable.d.ts
│  │  │  │  ├─ isCallable.js
│  │  │  │  ├─ isCallable.mjs
│  │  │  │  ├─ isNullOrUndefined.js
│  │  │  │  ├─ isNullOrUndefined.mjs
│  │  │  │  ├─ requireObjectCoercible.d.mts
│  │  │  │  ├─ requireObjectCoercible.d.ts
│  │  │  │  ├─ requireObjectCoercible.js
│  │  │  │  └─ requireObjectCoercible.mjs
│  │  │  ├─ conversion
│  │  │  │  ├─ index.d.mts
│  │  │  │  ├─ index.d.ts
│  │  │  │  ├─ index.js
│  │  │  │  ├─ index.mjs
│  │  │  │  ├─ toObject.d.mts
│  │  │  │  ├─ toObject.d.ts
│  │  │  │  ├─ toObject.js
│  │  │  │  └─ toObject.mjs
│  │  │  ├─ index.d.mts
│  │  │  ├─ index.d.ts
│  │  │  ├─ index.js
│  │  │  ├─ index.mjs
│  │  │  └─ types
│  │  │     ├─ languageType.d.mts
│  │  │     └─ languageType.d.ts
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ comparison
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ isCallable.ts
│  │  │  │  ├─ isNullOrUndefined.ts
│  │  │  │  └─ requireObjectCoercible.ts
│  │  │  ├─ conversion
│  │  │  │  ├─ index.ts
│  │  │  │  └─ toObject.ts
│  │  │  ├─ index.ts
│  │  │  ├─ object
│  │  │  └─ types
│  │  │     └─ languageType.d.ts
│  │  ├─ test
│  │  └─ tsconfig.json
│  ├─ modules
│  │  └─ promise
│  │     └─ index.ts
│  └─ toolkit
├─ playground
│  ├─ a.js
│  └─ index.html
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ rollup.config.mjs
├─ tsconfig.base.json
└─ tsconfig.json

```