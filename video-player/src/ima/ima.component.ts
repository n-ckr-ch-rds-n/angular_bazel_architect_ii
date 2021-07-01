import {Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from "@angular/core";
import {AdsManager} from "./ads.manager";
import {GoogleImaService} from "./google.ima.service";
import {VgAPI, VgFullscreenAPI} from "ngx-videogular";
import {ɵs as VgImaAds} from "ngx-videogular";

/**
 * Adaptation of the Videogular 2 IMA ads component to make it more customizable
 */
@Component({
    selector: "rez-ima",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./ima.component.html",
    styleUrls: ["./ima.component.scss"]
})
export class ImaComponent extends VgImaAds implements OnDestroy {

    @Input()
    vgAdTagUrl: string;

    @Output()
    allAdsComplete: EventEmitter<boolean> = new EventEmitter();

    constructor(ref: ElementRef, api: VgAPI, fsAPI: VgFullscreenAPI, private imaService: GoogleImaService) {
        super(ref, api, fsAPI);
    }

    processAdsManager(adsManager: AdsManager): void {
        this.imaService.adsManager = adsManager;
        super.processAdsManager(adsManager);
    }

    onAllAdsComplete() {
        super.onAllAdsComplete();
        // The destroy method is missing in videogular's definition of the Google IMA
        // A pull request has been made to include it: https://github.com/videogular/ngx-videogular/pull/883
        // @ts-ignore
        this.ima.adDisplayContainer.destroy();
        this.allAdsComplete.emit(true);
    }
}
