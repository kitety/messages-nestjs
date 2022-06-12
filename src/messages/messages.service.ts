import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    // service is create its own dependencies
    // do not do this on real app
    this.messagesRepository = new MessagesRepository();
  }

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
