import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingService, LoggingModule, LogglyWriter } from '@ngx-architecture/logging';
import { ConfigurationService, ConfigurationModule } from '@ngx-architecture/configuration';
import { ConsoleWriter } from '@ngx-architecture/logging';
import { ErrorHandlingModule, ErrorHandlingService } from '@ngx-architecture/error-handling';
import { SecurityModule, AuthenticationService } from '@ngx-architecture/security';
import { environment } from './../../../environments/environment';

/**
 * The factory function to initialize the logging service and writer for the
 * application.
 *
 * @param loggingService
 * @param consoleWriter
 */
export function initializeLogWriter(consoleWriter: ConsoleWriter) {
  console.log(`Initializing [Console Writer] from [AppModule]`);
  return () => {
    return consoleWriter;
  };
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorHandlingModule,
    LoggingModule,
    ConfigurationModule.forRoot({ config: environment.appConfig }),
    SecurityModule,
  ],
  providers: [
    ConfigurationService,
    LoggingService,
    ConsoleWriter,
    LogglyWriter,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingService,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeLogWriter,
      deps: [LoggingService, ConsoleWriter, LogglyWriter],
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingService,
      deps: [ConfigurationService, LoggingService],
    },
    AuthenticationService,
  ],
})
export class CrossCuttingModule {}
