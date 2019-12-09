# AngularE2E

## Development server

`ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running end-to-end tests

```
webdriver-manager start
npx protractor ./e2e/protractor.conf.js --specs=./e2e/src/login.e2e-spec.ts
```

