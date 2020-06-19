import { IConfiguration } from '@ngx-architecture/configuration';
import { ILoggingConfig } from '@ngx-architecture/logging';
import { IErrorHandingConfig } from '@ngx-architecture/error-handling';
import { ILogglyConfig } from '@ngx-architecture/logging';

export class AppConfig implements IConfiguration {
  applicationName: 'BuildMotion';
  version: '2.0.0';
  loggingConfig: ILoggingConfig = {
    applicationName: this.applicationName,
    isProduction: false,
    version: this.version,
  };
  errorHandlingConfig: IErrorHandingConfig = {
    applicationName: 'Angularlicious.LMS',
    includeDefaultErrorHandling: true,
  };
  logglyConfig: ILogglyConfig = {
    applicationName: 'Angularlicious.LMS',
    apiKey: '01e4b3aa-f301-43e7-bf60-40ba5d0729d4',
    sendConsoleErrors: true,
  };
}
