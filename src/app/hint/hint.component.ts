import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Question} from "@rezonence/core/config-extractor/freewall/question";
import {Theme} from "../config/theme";

@Component({
  selector: "app-hint",
  templateUrl: "./hint.component.html",
  styleUrls: ["./hint.component.scss"]
})
export class HintComponent implements OnInit {

  @Input()
  theme: Theme;

  @Input()
  question: Question;

  constructor() { }

  ngOnInit() {
  }

}
