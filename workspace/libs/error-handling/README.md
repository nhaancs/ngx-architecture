# error-handling

This module is for automatically handling errors in application, it override the default behaviors of the ErrorHandler provided by Angular.

## Example Usage

You only need to import this module to your app and replace the default error handler with ErrorHandlingService. Our new service will automatically handle when new error occurs.

```typescript
@NgModule({
    ...
    imports: [
        ...
        ErrorHandlingModule,
    ],
    providers: [
        ...
        {
            // replace default error handler with ErrorHandlingService
            provide: ErrorHandler,
            useClass: ErrorHandlingService,
            deps: [ConfigurationService, LoggingService],
        },
    ]
})

```

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test error-handling` to execute the unit tests.
