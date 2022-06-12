import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

// 添加到di
@Injectable()
export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {}

  findOnd(id: string) {
    return this.messagesRepository.findOnd(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
