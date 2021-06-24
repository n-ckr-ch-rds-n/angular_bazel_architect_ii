import {Component, EventEmitter, Input, OnInit} from "@angular/core";
import {MicrositeService} from "../microsite.service";
import {from, fromEvent, interval, merge} from "rxjs";
import {debounceTime, delay} from "rxjs/operators";

@Component({
  selector: "app-resizer",
  templateUrl: "./resizer.component.html",
  styleUrls: ["./resizer.component.scss"]
})
export class ResizerComponent implements OnInit {

  debouncePeriod = 200;
  contentChange: EventEmitter<void> = new EventEmitter();
  viewChange: EventEmitter<void> = new EventEmitter();

  @Input()
  contentSelector: string;

  constructor(private micrositeService: MicrositeService) { }

  ngOnInit() {
    merge(
        this.contentChange,
        this.viewChange,
        fromEvent(window, "resize"),
        from([0]).pipe(delay(this.debouncePeriod)),
        fromEvent(window, "orientationchange"))
        .pipe(debounceTime(this.debouncePeriod))
        .subscribe(async (event) => {
          await this.onResize();
        });

    this.micrositeService.listenForViewChange(() => {
      this.viewChange.emit();
    });
  }

  async onResize() {
    const targetElement = document.querySelector(this.contentSelector) as HTMLDivElement;
    if (targetElement && targetElement.offsetHeight && targetElement.offsetHeight !== window.innerHeight) {
      await this.micrositeService.sendSize({
        height: targetElement.offsetHeight
      });
    }
  }

}
