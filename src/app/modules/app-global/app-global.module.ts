import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared.module";
import { PostComponent } from './post/post.component';



@NgModule({
    declarations: [
        PostComponent
    ],
    exports: [
        PostComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AppGlobalModule { }
