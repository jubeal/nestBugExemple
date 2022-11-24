import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { AppService } from '../services/app.service';

interface AppCommandOptions {
  message: string;
}

@SubCommand({
  name: 'yellow',
  description: 'Tells you what you need to hear but in Yellow',
})
export class AppSubCommandNotWorking extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run(
    _PassedParams: string[],
    options: AppCommandOptions,
  ): Promise<void> {
    const { message } = options;

    console.log('SubCommandNotWorking');

    console.log('\x1b[33m%s\x1b[0m', this.appService.getMessage(message));
  }

  @Option({
    flags: '-m --message [string]',
    description: 'What you need to hear',
    required: false,
  })
  ParseMessage(val: string): string {
    return val.trim();
  }
}
