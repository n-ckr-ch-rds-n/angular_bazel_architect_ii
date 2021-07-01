import {NgModule} from "@angular/core";
import {PlayerComponent} from "./player.component";
import {ImaModule} from "../ima/ima.module";
import {VgBufferingModule, VgControlsModule, VgCoreModule, VgImaAdsModule, VgOverlayPlayModule} from "ngx-videogular";

@NgModule({
    declarations: [
        PlayerComponent
    ],
    imports: [
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgImaAdsModule,
        ImaModule
    ],
    exports: [
        PlayerComponent
    ]
})
export class PlayerModule {
}
