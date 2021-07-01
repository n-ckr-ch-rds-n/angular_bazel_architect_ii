import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {PlayerComponent} from "./player.component";
import {GoogleImaService} from "../ima/google.ima.service";
import {AdsManager} from "../ima/ads.manager";
import {MockComponent, MockModule} from "ng-mocks";
import {ImaComponent} from "../ima/ima.component";
import {VgCoreModule} from "ngx-videogular";
import {By} from "@angular/platform-browser";
import {AdsRenderingSettings} from "../ima/ads.rendering.settings";
import {EventEmitter} from "@angular/core";

describe("Video player component", () => {
    let component: PlayerComponent;
    let fixture: ComponentFixture<PlayerComponent>;
    let mockImaService: GoogleImaService;
    let mockAdsManager: AdsManager;
    let mockRenderingSettings: AdsRenderingSettings;
    let imaComponent: ImaComponent;
    let videoPlaying: boolean;
    let adPlaying: boolean;
    let imaService: GoogleImaService;
    let completed: boolean;
    let initialised: boolean;

    beforeEach(async(() => {
        mockAdsManager = {} as AdsManager;
        mockRenderingSettings = {uiElements: []};
        mockImaService = {
            adsRendererSettings: {},
            volume: 0,
            playing: false,
            play: () => {
                adPlaying = true;
            },
            pause: () => {
                adPlaying = false;
            },
            removeDefaultUiElements: () => {}
        } as GoogleImaService;
        TestBed.configureTestingModule({
            declarations: [
                PlayerComponent,
                MockComponent(ImaComponent),
            ],
            imports: [
                MockModule(VgCoreModule)
            ]
        }).overrideComponent(PlayerComponent, {
            set: {
                providers: [
                    {provide: GoogleImaService, useValue: mockImaService}
                ]
            }
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerComponent);
        component = fixture.componentInstance;
        imaService = fixture.debugElement.injector.get(GoogleImaService);
        component.videoCompleted = {
            emit: () => { completed = true; }
        } as EventEmitter<void>;
        component.videoStarted = false;
        component.videoElement = fixture.debugElement.query(By.css("video"));
        component.videoElement.nativeElement.play = () => videoPlaying = true;
        imaComponent = fixture.debugElement.query(By.directive(ImaComponent)).componentInstance;
        imaComponent.ngOnInit = () => { initialised = true; };
        completed = false;
        videoPlaying = false;
        adPlaying = false;
        initialised = false;
        fixture.detectChanges();
    });

    it("Emits an event when the video completes", () => {
        component.complete();
        expect(completed).toEqual(true, "Should have emitted and event when the video completed");
    });

    it("Re-initialises the IMA component when the video completes", () => {
        component.complete();
        expect(initialised).toEqual(true, "Should have re-initialised the IMA component");
    });

    it("When play is pressed and the video has started, it tells the IMA service to play an ad", () => {
        component.videoStarted = true;
        component.play();
        expect(adPlaying).toEqual(true, "Should have the IMA service to play an ad");
    });

    it("When play is pressed and the video has not started, it starts playing the video", () => {
        component.videoStarted = false;
        component.play();
        expect(videoPlaying).toEqual(true, "Should have started playing the video");
    });
});
