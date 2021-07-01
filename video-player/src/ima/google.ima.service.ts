import {Injectable, OnDestroy} from "@angular/core";
import {AdsManager} from "./ads.manager";
import {combineLatest, ReplaySubject, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";
import {Optional} from "@rezonence/sdk";
import {PlaybackState} from "./playback.state";
import {AdsRenderingSettings} from "./ads.rendering.settings";

@Injectable()
export class GoogleImaService implements OnDestroy {

    set adsRendererSettings(settings: AdsRenderingSettings) {
        this.adsRendererSettings$.next(settings);
        this._adsRendererSettings = settings;
    }

    get adsRendererSettings(): AdsRenderingSettings {
        return this._adsRendererSettings;
    }

    set volume(vol: number) {
        this.volume$.next(vol);
        this._volume = vol;
    }

    get volume(): number {
        return this._volume;
    }

    set adsManager(adsManager: AdsManager) {
        this.adsManagerOptional$.next(Optional.of(adsManager));
        this._adsManager = adsManager;
    }

    get adsManager(): AdsManager {
        return this._adsManager;
    }

    get playing(): boolean {
        return this._playing;
    }

    private _adsRendererSettings: AdsRenderingSettings;
    private adsManagerOptional$ = new ReplaySubject<Optional<AdsManager>>(1);

    /**
     * Only emit an ads manager when it's truthy
     */
    private adsManager$ = this.adsManagerOptional$
    .pipe(filter(optionalManager => optionalManager.exists))
    .pipe(map(optionalManager => optionalManager.item));

    private volume$ = new ReplaySubject<number>(1);
    private play$ = new ReplaySubject<PlaybackState>(1);
    private adsRendererSettings$ = new ReplaySubject<AdsRenderingSettings>(1);
    private _volume: number;
    private _adsManager: AdsManager;
    private _playing = true;
    private subscriptions: Subscription[] = [
        combineLatest([this.adsManager$, this.volume$])
            .subscribe(([adsManager, volume]) => adsManager.setVolume(volume)),
        combineLatest([this.adsManager$, this.play$])
            .subscribe(([adsManager, playState]) => {
                playState === PlaybackState.Playing ? adsManager.resume() : adsManager.pause();
            }),
        combineLatest([this.adsManager$, this.adsRendererSettings$])
            .subscribe(([adsManager, settings]) =>
             adsManager.updateAdsRenderingSettings(settings))
    ];

    constructor() {
    }

    play() {
        this.setPlayState(PlaybackState.Playing);
    }

    pause() {
        this.setPlayState(PlaybackState.Paused);
    }

    ngOnDestroy(): void {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    createCleanUiRendererSettings(): AdsRenderingSettings {
        const adsRendererSettings = new AdsRenderingSettings();
        (adsRendererSettings as any).uiElements = [];
        return adsRendererSettings;
    }

    removeDefaultUiElements() {
        this.adsRendererSettings = this.createCleanUiRendererSettings();
    }

    private setPlayState(state: PlaybackState) {
        this.play$.next(state);
        this._playing = state === PlaybackState.Playing;
    }
}
