/*
 * Filename: /Users/tonymedrano/Desktop/codigo-loco-project/codigo-loco-app/stencil.config.ts
 * Path: /Users/tonymedrano/Desktop/codigo-loco-project/codigo-loco-app
 * Created Date: Saturday, May 9th 2020, 1:28:30 pm
 * Author: Tony Medrano
 * 
 * Copyright (c) 2020 Your Company
 */

import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ],
  plugins: [ //. Added by me.
    sass()
  ]
};
