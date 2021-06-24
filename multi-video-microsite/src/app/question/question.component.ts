import {Component, Input, OnInit} from "@angular/core";
import {Question} from "@rezonence/core/config-extractor/freewall/question";
import {Theme} from "../config/theme";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;

  @Input()
  theme: Theme;

  constructor() { }

  ngOnInit() {
  }

}
