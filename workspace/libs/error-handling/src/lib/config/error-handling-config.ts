import { IErrorHandingConfig } from './i-error-handling-config';
import { IConfiguration } from '@ngx-architecture/configuration';

export class ErrorHandlingConfig implements IConfiguration {
  applicationName: string;
  version: string;
  errorHandlingConfig: IErrorHandingConfig;
}
