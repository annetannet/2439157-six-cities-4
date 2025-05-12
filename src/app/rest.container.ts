import { ConfigInterface } from '../shared/config/config.interface.js';
import ConfigService from '../shared/config/config.service.js';
import { RestSchema } from '../shared/config/rest.schema.js';
import { DatabaseClientInterface } from '../shared/database-client/databace-client.interface.js';
import MongoClientService from '../shared/database-client/mongo-client.service.js';
import { ExceptionFilterInterface } from '../shared/exception-filter/exception-filter.interface.js';
import { ExceptionFilter } from '../shared/exception-filter/exception-filter.js';
import { LoggerInterface } from '../shared/logger/logger.interface.js';
import PinoService from '../shared/logger/pino.service.js';
import { AppComponent } from '../shared/types/app-component.enum.js';
import Application from './rest.js';

import {Container} from 'inversify';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();
  restApplicationContainer.bind<Application>(AppComponent.Application).to(Application).inSingletonScope();
  restApplicationContainer.bind<LoggerInterface>(AppComponent.LoggerInterface).to(PinoService).inSingletonScope();
  restApplicationContainer.bind<ConfigInterface<RestSchema>>(AppComponent.ConfigInterface).to(ConfigService).inSingletonScope();
  restApplicationContainer.bind<DatabaseClientInterface>(AppComponent.DatabaseClientInterface).to(MongoClientService).inSingletonScope();
  restApplicationContainer.bind<ExceptionFilterInterface>(AppComponent.ExceptionFilterInterface).to(ExceptionFilter).inSingletonScope();
  return restApplicationContainer;
}
