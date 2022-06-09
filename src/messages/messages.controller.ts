import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-mesage.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hello World!';
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    // 应用dto
    console.log({ body });
    return 'Hello World!';
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log({ id });

    return 'Hello World!';
  }
}
