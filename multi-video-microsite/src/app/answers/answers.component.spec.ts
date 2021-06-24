import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {AnswersComponent} from "./answers.component";

describe("AnswersComponent", () => {
    let component: AnswersComponent;
    let fixture: ComponentFixture<AnswersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AnswersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AnswersComponent);
        component = fixture.componentInstance;
        const mockQuestion = {que: "foo?", answers: []};
        component.question = mockQuestion;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
