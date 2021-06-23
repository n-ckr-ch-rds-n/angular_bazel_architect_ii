import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit} from "@angular/core";
import {ArrowDirection} from "./arrow.direction";
import {Theme} from "../config/theme";

@Component({
  selector: "app-arrow",
  templateUrl: "./arrow.component.html",
  styleUrls: ["./arrow.component.scss"]
})
export class ArrowComponent implements OnInit {

  ArrowDirection = ArrowDirection;

  @Input()
  theme: Theme;

  @Input()
  direction: ArrowDirection;

  get height(): string {
    return `${this.elementRef.nativeElement.offsetHeight}px`;
  }

  get width(): string {
    return `${this.elementRef.nativeElement.offsetWidth}px`;
  }

  constructor(public elementRef: ElementRef) {

  }

  ngOnInit() {
  }
}
