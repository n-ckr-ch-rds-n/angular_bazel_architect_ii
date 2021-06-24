import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Answer} from "@rezonence/core/config-extractor/freewall/answer";
import {Theme} from "../config/theme";

@Component({
  selector: "app-answer",
  templateUrl: "./answer.component.html",
  styleUrls: ["./answer.component.scss"]
})
export class AnswerComponent implements OnInit {

  @Input()
  answer: Answer;

  @Input()
  index: number;

  @Input()
  theme: Theme;

  @Output()
  answerClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
