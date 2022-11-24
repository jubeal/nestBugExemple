import { Command, CommandRunner } from 'nest-commander';
import { AppWorkingSubCommandBlue } from './app.subCommandBlue';
import { AppWorkingSubCommandYellow } from './app.subCommandYellow';
import { AppDefaultSubCommand } from './app.subCommandDefault';

@Command({
  name: 'tell',
  subCommands: [
    AppWorkingSubCommandBlue,
    AppDefaultSubCommand,
    AppWorkingSubCommandYellow,
  ],
  description: 'Tells you what you need to hear',
})
export class AppWorkingCommand extends CommandRunner {
  async run() {
    console.log('default not called');
  }
}
