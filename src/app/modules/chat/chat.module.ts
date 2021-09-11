import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { BucketChatComponent } from './bucket-chat/bucket-chat.component';
import { ChatComponent } from './chat/chat.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { ChatBodyComponent } from './chat-body/chat-body.component';



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
        MatCardModule,
        MatListModule,
        MatIconModule
    ]
})
export class ChatModule { }
