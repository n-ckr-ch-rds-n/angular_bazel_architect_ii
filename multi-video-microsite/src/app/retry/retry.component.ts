import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Theme} from "../config/theme";

@Component({
  selector: "app-retry",
  templateUrl: "./retry.component.html",
  styleUrls: ["./retry.component.scss"]
})
export class RetryComponent implements OnInit {

  @Input()
  theme: Theme;

  @Output()
  retryClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
