import {Component, Input, OnInit} from "@angular/core";
import {VideoConfig} from "../config/video.config";
import {Theme} from "../config/theme";

@Component({
  selector: "app-cta",
  templateUrl: "./cta.component.html",
  styleUrls: ["./cta.component.scss"]
})
export class CtaComponent implements OnInit {

  @Input() videoConfig: VideoConfig;

  @Input() theme: Theme;

  constructor() { }

  ngOnInit() {
  }
}
