# khteh (khteh)

khteh's app using Quasar Framework which includes:

- Read/Write to Google Firebase Cloud FireStore
- Fibonacci calculator

## Install the Quasar CLI

```bash
npm install -g @quasar/cli
```

## Install the Firebase tools

```bash
npm install -g firebase-tools
```

## Install the dependencies

```bash
npm install
```

## Install packages

```bash
quasar ext add @quasar/<package name>
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
firebase serve
```

### Lint the files

```bash
npm run lint
```

### Build the app for production

```bash
quasar build
```

### Publish the webapp to firebase

```bash
firebase deploy
```

### Publish the webapp to https://khteh.github.io GitHub Page

```bash
npm run deploy
```

- This will run `quasar build` and `push-dir` the content of dist/spa to https://khteh.github.io
