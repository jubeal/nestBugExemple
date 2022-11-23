import { Command, CommandRunner, Option } from 'nest-commander';
import { AppService } from './app.service';
import { AppSubCommand } from './app.subCommand';
import { AppSubCommandNotWorking } from './app.subCommandNotWorking';

interface AppCommandOptions {
  message: string;
}

@Command({
  name: 'say',
  subCommands: [AppSubCommand, AppSubCommandNotWorking],
  description: 'Tells you what you need to hear',
})
export class AppCommand extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run(
    _PassedParams: string[],
    options: AppCommandOptions,
  ): Promise<void> {
    const { message } = options;

    console.log('Command');

    console.log(this.appService.getMessage(message));
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
