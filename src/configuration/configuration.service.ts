import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

/**
 * Configuration Service
 */
@Injectable()
export class ConfigurationService {
 
  private readonly envConfig: { [key: string]: string };

  /**
   * @param filePath  // To Read configuration files.
   */

  constructor(filePath) {
    const file = (fs.existsSync(filePath)) ? filePath : '.env';
    this.envConfig = dotenv.parse(fs.readFileSync(file));
  }

  /**
   * @param key
   */

  get(key): string | number | any {
    return this.envConfig[key];
  }
}
