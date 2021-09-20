import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { BucketChatComponent } from './bucket-chat/bucket-chat.component';
import { ChatComponent } from './chat/chat.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import {SharedModule} from "../shared.module";



@NgModule({
    declarations: [
        PrivateChatComponent,
        BucketChatComponent,
        ChatComponent,
        ChatBodyComponent
    ],
    exports: [
        ChatComponent
    ],
    imports: [
        CommonModule,
      SharedModule
    ]
})
export class ChatModule { }
