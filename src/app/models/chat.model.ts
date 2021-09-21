export class Chat {
  chatId: number;
  title: string;
  type: string;


  constructor(chatId: number, title: string, type: string) {
    this.chatId = chatId;
    this.title = title;
    this.type = type;
  }
}
