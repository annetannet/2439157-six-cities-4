import {DatabaseClientInterface} from '../../shared/database-client/databace-client.interface.js';
import MongoClientService from '../../shared/database-client/mongo-client.service.js';
import {getMongoURI} from '../../shared/helpers/db.js';
import {createOffer} from '../../shared/helpers/offer.js';
import TSVFileReader from '../../shared/libs/file-reader/tsv-file-reader.js';
import ConsoleLoggerService from '../../shared/logger/console.service.js';
import {LoggerInterface} from '../../shared/logger/logger.interface.js';
import {OfferServiceInterface} from '../../shared/modules/offer/offer-service.interface.js';
import {OfferModel} from '../../shared/modules/offer/offer.entity.js';
import OfferService from '../../shared/modules/offer/offer.service.js';
import {UserServiceInterface} from '../../shared/modules/user/user-service.interface.js';
import {UserModel} from '../../shared/modules/user/user.entity.js';
import UserService from '../../shared/modules/user/user.service.js';
import {Offer} from '../../shared/types/rental-offer.js';
import {CliCommandInterface} from './command.interface.js';
import chalk from 'chalk';
import {CityType, ConveniencesType, TypeHousing} from '../../shared/types/index.js';


const DEFAULT_DB_PORT = '27017';
const DEFAULT_USER_PASSWORD = 'test';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';
  private userService!: UserServiceInterface;
  private offerService!: OfferServiceInterface;
  private databaseService!: DatabaseClientInterface;
  private readonly logger: LoggerInterface;
  private salt!: string;

  constructor() {
    this.onLine = this.onLine.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.logger = new ConsoleLoggerService();
    this.offerService = new OfferService(this.logger, OfferModel);
    this.userService = new UserService(this.logger, UserModel);
    this.databaseService = new MongoClientService(this.logger);
  }

  private async saveOffer(offer: Offer) {
    const off = offer;
    console.log(off);
    const user = await this.userService.findOrCreate({
      name: 'Anna',
      email: 'annetpeach@gmail.com',
      userType: 'userType',
      password: DEFAULT_USER_PASSWORD
    }, this.salt);

    await this.offerService.create({
      name: 'OfferLuxury',
      description: 'Very good offer and very luxury top level wooow',
      date: new Date(),
      city: CityType.Amsterdam,
      previewImg: 'apartment-03.jpg',
      images: ['apartment-03.jpg', 'apartment-02.jpg', 'apartment-01.jpg'],
      flagIsPremium: true,
      flagIsFavourites: true,
      rating: 5,
      typeHousing: TypeHousing.Apartment,
      countPeople: 2,
      countRooms: 8,
      price: 100000,
      conveniences: ConveniencesType.Breakfast,
      countComments: 3,
      coordinates: '50.846557,4.351697',
      author: user,
    });
  }

  private async onLine(line: string, resolve: () => void) {
    const offer = createOffer(line);
    await this.saveOffer(offer);
    resolve();
  }

  private onComplete(count: number) {
    this.logger.info(`${count} rows imported.`);
    this.databaseService.disconnect().then((value) => {
      console.log(value);
    });
  }

  public async execute(filename: string, login: string, password: string, host: string, dbname: string, salt: string): Promise<void> {
    const uri = getMongoURI(login, password, host, DEFAULT_DB_PORT, dbname);
    this.salt = salt;

    await this.databaseService.connect(uri);

    const fileReader = new TSVFileReader(filename.trim());
    fileReader.on('line', this.onLine);
    fileReader.on('end', this.onComplete);

    try {
      await fileReader.read();
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }
      this.logger.error(`Не удалось импортировать данные из файла: '${chalk.red(err.message)}'`);
    }
  }
}
