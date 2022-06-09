import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hello World!';
  }

  @Post()
  createMessages(@Body() body: { content: string }) {
    console.log({ body });
    return 'Hello World!';
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log({ id });

    return 'Hello World!';
  }
}
