import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Question} from "@rezonence/core/config-extractor/freewall/question";
import {Answer} from "@rezonence/core/config-extractor/freewall/answer";
import {Theme} from "../config/theme";

@Component({
  selector: "app-answers",
  templateUrl: "./answers.component.html",
  styleUrls: ["./answers.component.scss"]
})
export class AnswersComponent implements OnInit {

  @Input()
  question: Question;

  @Input()
  theme: Theme;

  @Output()
  answerClick: EventEmitter<Answer> = new EventEmitter();

  showHint: boolean;

  constructor() { }

  answerClicked(answer: Answer) {
    if (!answer.tof) {
      this.showHint = true;
    }
    this.answerClick.emit(answer);
  }

  ngOnInit() {
  }

}
