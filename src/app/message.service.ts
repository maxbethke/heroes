import { Injectable } from "@angular/core";
import { Message } from "./message";

const LAST_MESSAGES_COUNT = 10;

export class MessageService {
  messages: Message[] = [];
  lastMessages: Message[] = [];

  add(message: string) {
    this.messages.push({
      timestamp: Date(),
      text: message
    });
    this.lastMessages = this.getLastMessages(LAST_MESSAGES_COUNT);
  }

  clear() {
    this.messages = [];
    this.lastMessages = [];
  }

  getLastMessages(count: number) {
    return this.messages.slice(this.messages.length - count);
  }

  constructor() {}
}
