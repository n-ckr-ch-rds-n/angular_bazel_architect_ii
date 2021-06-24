import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";

import {ArrowComponent} from "./arrow.component";
import {ArrowDirection} from "./arrow.direction";

describe("ArrowComponent", () => {
  let component: ArrowComponent;
  let fixture: ComponentFixture<ArrowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowComponent);
    component = fixture.componentInstance;
    component.direction = ArrowDirection.Down;
    component.theme = {backgroundColour: "purple"};
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
