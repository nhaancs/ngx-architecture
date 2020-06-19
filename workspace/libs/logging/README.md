# logging

This module handles logging activities. You can choose to write logs to console or send them to the 3rd parties.

## ILogEntry interface

```typescript
// Each message logged is a object sastified ILogEntry interface
export interface ILogEntry {
  source: string;
  application: string;
  severity: Severity;
  message: string;
  timestamp: Date;
  tags?: string[];
}
```


## Log service

```typescript
@Injectable()
export class LoggingService {
  // implementation hidden
  /*
  - Use this class to add new messages.
  - Log writer will be responsible to output these 
  messages.
  */
}
```

## Log writer

```typescript
/**
 * The factory function to initialize the logging service and writer for the
 * application.
 */
export function initializeLogWriter(consoleWriter: ConsoleWriter) {
  return () => {
    return consoleWriter;
  };
}

...

@NgModule({
    ...
    providers: [
        ...
        {
            provide: APP_INITIALIZER,
            useFactory: initializeLogWriter,
            deps: [LoggingService, ConsoleWriter, LogglyWriter],
            multi: true,
        },
    ]
})
```

After register a log writer, it will automatically listen to log service for new messages. We do not need to do any thing else.

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test logging` to execute the unit tests.
