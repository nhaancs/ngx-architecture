import { AppConfig } from '../assets/config/app.config.development';
// import { IConfiguration } from '@ngx-architecture/configuration';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const applicationConfig: IConfiguration = new AppConfig();

export const environment = {
  appConfig: new AppConfig(),
  production: true,
};
