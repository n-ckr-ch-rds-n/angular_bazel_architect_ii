import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ContainerComponent} from "./container/container.component";
import {BannerComponent} from "./banner/banner.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {VideosComponent} from "./videos/videos.component";
import {PlayerModule} from "@rezonence/video-player";
import {MatTabsModule} from "@angular/material/tabs";
import {LinkPipe} from "./link.pipe";
import {ArrowComponent} from "./arrow/arrow.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CtaComponent } from "./cta/cta.component";
import {MatButtonModule} from "@angular/material/button";
import { ResizerComponent } from './resizer/resizer.component';
import { BannerImageComponent } from './banner-image/banner-image.component';
import { QuestionAndAnswersComponent } from './question-and-answers/question-and-answers.component';
import {MatCardModule} from "@angular/material/card";
import { QuestionComponent } from './question/question.component';
import { AnswersComponent } from './answers/answers.component';

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        BannerComponent,
        VideosComponent,
        ArrowComponent,
        LinkPipe,
        CtaComponent,
        ResizerComponent,
        BannerImageComponent,
        QuestionAndAnswersComponent,
        QuestionComponent,
        AnswersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        PlayerModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
