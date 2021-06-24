import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";

import {QuestionComponent} from "./question.component";
import {Question} from "@rezonence/core/config-extractor/freewall/question";

describe("QuestionComponent", () => {
    let component: QuestionComponent;
    let fixture: ComponentFixture<QuestionComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionComponent);
        component = fixture.componentInstance;
        component.theme = {labelTextColour: "pink"};
        component.question = {que: "baz"} as Question;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
