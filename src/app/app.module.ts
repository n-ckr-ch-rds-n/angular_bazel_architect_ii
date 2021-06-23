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

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        BannerComponent,
        VideosComponent,
        ArrowComponent,
        LinkPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        PlayerModule,
        MatTabsModule,
        BrowserAnimationsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
