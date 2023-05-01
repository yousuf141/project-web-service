import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemGateway } from './item/item.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ItemGateway],
})
export class AppModule {}
