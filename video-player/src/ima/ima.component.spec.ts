import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ImaComponent} from "./ima.component";
import {VgAPI, VgFullscreenAPI} from "ngx-videogular";
import {GoogleImaService} from "./google.ima.service";
import {AdsManager} from "./ads.manager";
import {AdsRenderingSettings} from "./ads.rendering.settings";
import {EventEmitter} from "@angular/core";

describe("RezImaComponent", () => {
    let component: ImaComponent;
    let fixture: ComponentFixture<ImaComponent>;
    let mockSettings: AdsRenderingSettings;
    let updatedSettings: AdsRenderingSettings;
    let updatedVolume: number;
    let imaService: GoogleImaService;
    let destroyed: boolean;
    let emitted: boolean;

    const mockVgApi: VgAPI = {
        videogularElement: {
            offsetWidth: Math.random(),
            offsetHeight: Math.random()
        },
        isPlayerReady: true
    } as VgAPI;

    const mockAdsManager: AdsManager = {
        getCuePoints: () => [],
        addEventListener: (type: string, callback: (evt: any) => void, useCapture?: boolean) => {},
        init: (width: number, height: number, viewMode: any, optVideoElement?: HTMLVideoElement) => {},
        setVolume: (vol: number) => {updatedVolume = vol; },
        updateAdsRenderingSettings: (settings: AdsRenderingSettings) => {updatedSettings = settings; },
        start: () => {}
    } as AdsManager;

    const mockImaService: GoogleImaService = {
        adsManager: mockAdsManager,
    } as GoogleImaService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ImaComponent ],
            providers: [
                {provide: VgAPI, useValue: mockVgApi},
                {provide: VgFullscreenAPI, useValue: {} as VgFullscreenAPI},
                {provide: GoogleImaService, useValue: mockImaService},
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImaComponent);
        mockSettings = {uiElements: []};
        component = fixture.componentInstance;
        component.skipButton = {style: {display: "foobar"} as CSSStyleDeclaration} as HTMLElement;
        component.ima = {
            adsManager: mockAdsManager,
            adDisplayContainer: {
                destroy: () => destroyed = true
            } as any
        } as any;
        component.onPlayerReady = () => {};
        component.allAdsComplete = {
            emit: (value: boolean): void => {
                emitted = value;
            }
        } as EventEmitter<boolean>;
        (window as any).google = {
            ima: {
                AdEvent: {Type: "Foo"},
                AdErrorEvent: {Type: "Bar"},
                ViewMode: "Baz"
            }
        };
        destroyed = false;
        emitted = false;
        fixture.detectChanges();
        imaService = TestBed.get(GoogleImaService);
    });

    it("Sets the ads manager on the IMA service", () => {
        component.processAdsManager(mockAdsManager);
        expect(imaService.adsManager).toEqual(mockAdsManager,
            "Should set the passed ads manager on the IMA service");
    });

    it("Tells the IAM to destroy the ad container when all ads are completed", () => {
        component.onAllAdsComplete();
        expect(destroyed).toEqual(true,
            "Should have called the destroy method on the IMA's ad display container");
    });

    it("Emits an event when all ads are complete", () => {
        component.onAllAdsComplete();
        expect(emitted).toEqual(true,
            "Should have emitted an event when all ads are complete");
    });
});
