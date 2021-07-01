import {TestBed} from "@angular/core/testing";
import {GoogleImaService} from "./google.ima.service";
import {AdsManager} from "./ads.manager";
import {AdsRenderingSettings} from "./ads.rendering.settings";

describe("GoogleImaService", () => {
    let service: GoogleImaService;
    let mockGoogle: {ima: {}};
    let mockAdsManager: AdsManager;
    let mockConsole: Console;
    let imaFound: string;
    let warning: string;
    let volume: number;
    let adPaused: boolean;
    let adResumed: boolean;
    let adsRenderingSettings: AdsRenderingSettings;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GoogleImaService]
        });
        service = TestBed.get(GoogleImaService);
        mockGoogle = {
            ima: {}
        };
        mockAdsManager = {
            setVolume: (vol: number) => {volume = vol; },
            pause: () => {adPaused = true; },
            resume: () => {adResumed = true; },
            updateAdsRenderingSettings: (settings: AdsRenderingSettings) => {
                adsRenderingSettings = settings;
            }
        } as AdsManager;
        mockConsole = {
            log: (msg: string) => {imaFound = msg; },
            warn: (msg: string) => {warning = msg; }
        } as Console;
        volume = 0;
        service.adsManager = mockAdsManager;
        adResumed = false;
        adPaused = false;
    });

    it("Plays the ad", () => {
        service.play();
        expect(service.playing).toEqual(true, "Should have started playing the ad");
        expect(adResumed).toEqual(true, "Should have started playing the ad");
    });

    it("Pauses the ad", () => {
        service.pause();
        expect(service.playing).toEqual(false, "Should have paused the ad");
        expect(adPaused).toEqual(true, "Should have paused the ad");
    });

    it("Sets the volume", () => {
        service.volume = 1;
        expect(volume).toEqual(1, "Should have set volume to the passed value");
        service.volume = 0;
        expect(volume).toEqual(0, "Should have set volume to the passed value");
    });

    it("Sets the ads renderer settings", () => {
        const mockAdsRenderSettings = {foo: "bar"} as AdsRenderingSettings;
        service.adsRendererSettings = mockAdsRenderSettings;
        expect(adsRenderingSettings).toEqual(mockAdsRenderSettings,
            "Should have set the ads renderer settings to the passed value");
    });

});
