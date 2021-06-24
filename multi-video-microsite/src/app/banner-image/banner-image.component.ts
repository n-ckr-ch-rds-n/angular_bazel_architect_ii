import {Component, Input, OnInit} from "@angular/core";
import {FreeWallImage} from "@rezonence/core/config-extractor/freewall/freewall.image";

@Component({
  selector: "app-banner-image",
  templateUrl: "./banner-image.component.html",
  styleUrls: ["./banner-image.component.scss"]
})
export class BannerImageComponent implements OnInit {

  @Input()
  image: FreeWallImage;

  constructor() {
  }

  ngOnInit() {
  }

}
