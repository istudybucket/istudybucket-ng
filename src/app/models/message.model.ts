export class Message {
  senderId: number;
  content: string;
  chatId: number;
  messageId: number;

  constructor(senderId: number, content: string, chatId: number, messageId: number) {
    this.senderId = senderId;
    this.content = content;
    this.chatId = chatId;
    this.messageId = messageId;
  }
}
