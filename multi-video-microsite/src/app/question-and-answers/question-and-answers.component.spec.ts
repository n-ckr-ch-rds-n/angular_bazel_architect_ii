import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";

import {QuestionAndAnswersComponent} from "./question-and-answers.component";
import {Question} from "@rezonence/core/config-extractor/freewall/question";

describe("QuestionAndAnswersComponent", () => {
    let component: QuestionAndAnswersComponent;
    let fixture: ComponentFixture<QuestionAndAnswersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionAndAnswersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionAndAnswersComponent);
        component = fixture.componentInstance;
        component.question = {que: "foo"} as Question;
        component.theme = {};
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
