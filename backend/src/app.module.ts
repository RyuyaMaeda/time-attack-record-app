import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordController } from './record/record.controller';

@Module({
  imports: [],
  controllers: [AppController, RecordController],
  providers: [AppService],
})
export class AppModule {}
