import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {MicrositeConfig} from "../config/microsite.config";
import {Placement} from "../config/placement";
import {ArrowDirection} from "../arrow/arrow.direction";
import {MicrositeService} from "../microsite.service";
import {PlayerComponent} from "@rezonence/video-player";
import {MatTabGroup, MatTabHeaderPosition} from "@angular/material/tabs";

/**
 * This renders the video tabs
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.scss"]
})
export class VideosComponent implements OnInit, AfterViewInit {

  @Input()
  videoIndex = 0;

  @ViewChild(MatTabGroup, {static: false, read: ElementRef})
  tabGroup: ElementRef;

  @ViewChild("player", {static: false})
  player: PlayerComponent;

  @ViewChild("tabLabel", {static: false})
  tabLabel: ElementRef;

  MenuPlacement = Placement;
  placementMap: Record<Placement, MatTabHeaderPosition> = {
    [Placement.Top]: "above",
    [Placement.Bottom]: "below"
  };

  _config: MicrositeConfig;
  _inView: boolean;

  @Input()
  set config(config: MicrositeConfig) {
    this._config = config;
    document.body.style.backgroundColor = config.theme.backgroundColour;
  }

  get config(): MicrositeConfig {
    return this._config;
  }

  constructor(private micrositeService: MicrositeService) {
  }

  get headerPosition(): MatTabHeaderPosition {
    return this.placementMap[this.config.menu.placement];
  }

  get tabsPaginated(): boolean {
    return this.tabGroup && !!(this.tabGroup.nativeElement as HTMLElement)
        .querySelector(".mat-tab-header-pagination-controls-enabled");
  }

  get arrowDirection(): ArrowDirection {
    return this.config.menu.placement === Placement.Bottom ? ArrowDirection.Up : ArrowDirection.Down;
  }

  ngOnInit() {
    this.micrositeService.listenForViewChange(event => {
      const inView = (event.dat.isVisible && event.dat.inView);
      if (inView !== this._inView) {
        this._inView = inView;
        if (inView) {
          this.player.play();
        } else {
          this.player.pause();
        }
      }
    });
  }

  onVideoComplete() {
    this.videoIndex ++;
    if (this.videoIndex > this.config.videos.length - 1) {
      this.videoIndex = 0;
    }
  }

  ngAfterViewInit() {
  }
}
