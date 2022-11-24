import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { AppService } from '../services/app.service';

interface AppCommandOptions {
  messageBlue: string;
}

@SubCommand({
  name: 'blue',
  description: 'Tells you what you need to hear but in blue',
})
export class AppSubCommand extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run(
    _PassedParams: string[],
    options: AppCommandOptions,
  ): Promise<void> {
    const { messageBlue } = options;

    console.log('SubCommand');

    console.log('\x1b[36m%s\x1b[0m', this.appService.getMessage(messageBlue));
  }

  @Option({
    flags: '-b --message-blue [string]',
    description: 'What you need to hear',
    required: false,
  })
  ParseMessage(val: string): string {
    return val.trim();
  }
}
