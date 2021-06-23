import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ContainerComponent} from "./container/container.component";
import {BannerComponent} from "./banner/banner.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        BannerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
