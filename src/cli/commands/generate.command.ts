import got from 'got';
import TsvFileWriter from '../../shared/libs/file-writer/tsv-file-writer.js';
import OfferGenerator from '../../shared/libs/offer-generator/tsv-offer-generator.js';
import { MockData } from '../../shared/types/mock-server-data.type.js';
import { CliCommandInterface } from './command.interface.js';


export default class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';
  private initialData!: MockData;

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);
    try {
      this.initialData = await got.get(url).json();
    } catch {
      console.log(`Can't fetch data from ${url}`);
      return;
    }

    const offerGeneratorString = new OfferGenerator(this.initialData);
    const tsvFileWriter = new TsvFileWriter(filepath);
    for (let i = 0; i < offerCount; i++) {
      await tsvFileWriter.write(offerGeneratorString.generate());
    }
    console.log(`File ${filepath} was created`);
  }
}
