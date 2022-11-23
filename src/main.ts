import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    await CommandFactory.run(AppModule);
  } catch (err) {
    console.error(err);
  }
}
bootstrap();
