import { Module } from '@nestjs/common';
import { AppCommand } from './app.command';
import { AppService } from './app.service';
import { AppSubCommand } from './app.subCommand';
import { AppSubCommandNotWorking } from './app.subCommandNotWorking';

@Module({
  providers: [AppService, AppCommand, AppSubCommand, AppSubCommandNotWorking],
})
export class AppModule {}
