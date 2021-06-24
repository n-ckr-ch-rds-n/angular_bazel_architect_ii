import {Component, OnInit} from "@angular/core";
import {MicrositeConfig} from "../config/microsite.config";
import {AnswerClickEvent, FreeWallData} from "@rezonence/sdk";
import {Placement} from "@rezonence/sdk";
import {MicrositeService} from "../microsite.service";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"]
})
export class ContainerComponent implements OnInit {

  configPromise: Promise<MicrositeConfig>;
  freewallDataPromise: Promise<FreeWallData>;
  Placement = Placement;
  answerClickEvent: AnswerClickEvent;
  videoIndex = 0;

  constructor(private micrositeService: MicrositeService) {
  }

  ngOnInit() {
    this.start();
  }

  async start() {
    this.getConfigPromises();
    const config = await this.configPromise;
    this.setAnswerClickHandler(config.videos.length);
  }

  private getConfigPromises() {
    this.configPromise = this.micrositeService.getConfig();
    this.freewallDataPromise = this.micrositeService.getFreeWallData();
  }

  private setAnswerClickHandler(numberOfVideos: number) {
    this.micrositeService.listenForAnswerClick( async (answerClickEvent) => {
      if (!this.answerClickEvent) {
        this.answerClickEvent = answerClickEvent;
        const maxIndex = Math.max(numberOfVideos - 1, 0);
        const answerIndex = this.answerClickEvent.dat.answerIndex || 0;
        this.videoIndex = Math.min(maxIndex, answerIndex);
      }
    });
  }
}
