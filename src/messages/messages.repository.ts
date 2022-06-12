import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOnd(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    const data = {
      content,
      id,
    };
    messages[id] = data;

    // write file
    await writeFile('messages.json', JSON.stringify(messages));
    return data;
  }
}
