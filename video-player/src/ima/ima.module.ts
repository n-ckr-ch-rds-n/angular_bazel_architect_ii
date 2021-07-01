import {NgModule} from "@angular/core";
import {ImaComponent} from "./ima.component";
import {CommonModule} from "@angular/common";
import {VgCoreModule, VgImaAdsModule} from "ngx-videogular";

@NgModule({
    declarations: [
        ImaComponent
    ],
    imports: [
        CommonModule,
        VgCoreModule,
        VgImaAdsModule,
    ],
    exports: [
        ImaComponent
    ]
})
export class ImaModule {
}
