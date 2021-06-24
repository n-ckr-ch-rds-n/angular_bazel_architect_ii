import {Component, Input, OnInit} from "@angular/core";
import {Question} from "@rezonence/core/config-extractor/freewall/question";
import {Theme} from "../config/theme";

@Component({
  selector: "app-question-and-answers",
  templateUrl: "./question-and-answers.component.html",
  styleUrls: ["./question-and-answers.component.scss"]
})
export class QuestionAndAnswersComponent implements OnInit {

  @Input()
  question: Question;

  @Input()
  theme: Theme;

  constructor() { }

  ngOnInit() {
  }

}
