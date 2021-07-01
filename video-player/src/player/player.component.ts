import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {ImaComponent} from "../ima/ima.component";
import {GoogleImaService} from "../ima/google.ima.service";
import {AdsRenderingSettings} from "../ima/ads.rendering.settings";

@Component({
    selector: "rez-video-player",
    templateUrl: "./player.component.html",
    styleUrls: ["./player.component.scss"],
    providers: [GoogleImaService]
})
export class PlayerComponent implements OnInit {

    @Input()
    set adsRenderingSettings(settings: AdsRenderingSettings) {
        this.imaService.adsRendererSettings = settings;
    }

    @Input()
    set volume(vol: number) {
        this.imaService.volume = vol;
    }

    get volume(): number {
        return this.imaService.volume;
    }

    get playing(): boolean {
        return this.imaService.playing;
    }

    @Input()
    vastTagUrl: string;

    @Input()
    loop: boolean;

    @Input()
    autoplay: boolean;

    @ViewChild(ImaComponent, {static: false})
    rezImaComponent: ImaComponent;

    @ViewChild("videoElement", {static: false})
    videoElement: ElementRef;

    @Output()
    videoCompleted: EventEmitter<void> = new EventEmitter();

    videoStarted = false;

    constructor(private imaService: GoogleImaService) {
    }

    restart() {
        this.rezImaComponent.ngOnInit();
    }

    complete() {
        this.videoCompleted.emit();
        this.restart();
    }

    play() {
        if (!this.videoStarted) {
            this.videoStarted = true;
            this.videoElement.nativeElement.play();
        }
        this.imaService.play();
    }

    pause() {
        this.imaService.pause();
    }

    toggleVolume() {
        this.volume = this.volume ? 0 : 1;
    }

    ngOnInit(): void {
        this.imaService.removeDefaultUiElements();
    }
}
