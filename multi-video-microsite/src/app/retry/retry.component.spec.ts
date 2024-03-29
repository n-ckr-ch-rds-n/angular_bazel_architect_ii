import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";

import { RetryComponent } from "./retry.component";

describe("RetryComponent", () => {
  let component: RetryComponent;
  let fixture: ComponentFixture<RetryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryComponent);
    component = fixture.componentInstance;
    component.theme = {buttonColour: "black", buttonTextColour: "pink"};
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
