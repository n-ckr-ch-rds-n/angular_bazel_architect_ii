import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BannerComponent } from "./banner.component";
import {FreeWallData} from "@rezonence/sdk";

describe("BannerComponent", () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    const mockData = {questionIndex: 0} as FreeWallData;
    const mockFreeWallConfig = {questions: [], image: {lnk: "foo"}};
    component.freewallConfig = mockFreeWallConfig;
    component.data = mockData;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
