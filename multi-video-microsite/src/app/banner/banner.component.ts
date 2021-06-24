import {Component, Input, OnInit} from "@angular/core";
import {FreeWallConfig} from "@rezonence/core/config-extractor/freewall/freewall.config";
import {FreeWallData} from "@rezonence/sdk";
import {MicrositeService} from "../microsite.service";
import {Theme} from "../config/theme";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit {

  @Input()
  data: FreeWallData;

  @Input()
  theme: Theme;

  @Input()
  freewallConfig: FreeWallConfig;

  constructor(private micrositeService: MicrositeService) {
  }

  ngOnInit() {
    this.micrositeService.notifyReady();
  }

}
