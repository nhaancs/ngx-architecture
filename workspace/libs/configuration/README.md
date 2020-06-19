# configuration

Example Usage:

```typescript
imports: [
    // For root is important because you will want
    // the ConfigurationContext will be provided to 
    /// the root level of DI system
    ConfigurationModule.forRoot({ config: environment.appConfig }),
],
```

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test configuration` to execute the unit tests.
