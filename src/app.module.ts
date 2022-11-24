import { Module } from '@nestjs/common';
import { AppCommand } from './notWorkingCommand/app.command';
import { AppService } from './services/app.service';
import { AppSubCommand } from './notWorkingCommand/app.subCommand';
import { AppSubCommandNotWorking } from './notWorkingCommand/app.subCommandNotWorking';
import { AppWorkingCommand } from './workingCommand/app.command';
import { AppWorkingSubCommandBlue } from './workingCommand/app.subCommandBlue';
import { AppWorkingSubCommandYellow } from './workingCommand/app.subCommandYellow';
import { AppDefaultSubCommand } from './workingCommand/app.subCommandDefault';

@Module({
  providers: [
    AppService,
    AppCommand,
    AppSubCommand,
    AppSubCommandNotWorking,
    AppWorkingCommand,
    AppWorkingSubCommandBlue,
    AppWorkingSubCommandYellow,
    AppDefaultSubCommand,
  ],
})
export class AppModule {}
