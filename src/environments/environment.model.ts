import { InjectionToken } from '@angular/core';

export const ENVIRONMENT = new InjectionToken<Environment>('Environment configuration');

export interface Environment {
  production: boolean;
  api: string;
}
