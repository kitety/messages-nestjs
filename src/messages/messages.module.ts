import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  //  di注入的需要添加到providers
  providers: [MessagesRepository, MessagesService],
})
export class MessagesModule {}
