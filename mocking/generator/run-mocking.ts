import * as apimock from '@ng-apimock/core';
import { watch } from 'chokidar';
import * as cors from 'cors';
import * as express from 'express';
// tslint:disable:no-var-requires no-require-imports
import * as serveStatic from 'serve-static';
import { generatedMocksPath, generateMocks } from './generator';

const devInterface = require('@ng-apimock/dev-interface');
const mockPort = 5554;

generateMocks();

const watcher = watch(`${__dirname}/**/*`);
watcher.on('change', (file: string) => {
  delete require.cache[require.resolve(file)];
  generateMocks();
});

// Process the application mocks
(apimock as any).processor.process({ src: generatedMocksPath });
const app = express();

// Use the ng-apimock middleware
app.use((apimock as any).middleware);
app.use('/dev-interface/', serveStatic(devInterface));
app.use(cors());

app.listen(mockPort, (error: any) => {
  if (!error) {
    // tslint:disable: no-console
    console.info(`Ng-Apimock running on port ${String(mockPort)}`);
    console.info(
      `Ng-Apimock interface running on http://localhost:${String(
        mockPort
      )}/dev-interface`
    );
  }
});
