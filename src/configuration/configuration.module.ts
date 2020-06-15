import { Module, Global } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

/**
 * Configuration Module
 */
@Global()
@Module({
  providers: [
    {
      provide: ConfigurationService,
      useValue: new ConfigurationService(`${process.cwd()}/.env`),
    },
  ],
  exports: [
    ConfigurationService,
  ],
})
export class ConfigurationModule { }
