export interface AdsManager extends google.ima.AdsManager {
    updateAdsRenderingSettings(settings: any): void;
    setVolume(vol: number): void;
    pause(): void;
    resume(): void;
}
