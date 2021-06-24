import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {AnswerComponent} from "./answer.component";
import {MatButtonModule} from "@angular/material/button";

describe("AnswerComponent", () => {
    let component: AnswerComponent;
    let fixture: ComponentFixture<AnswerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnswerComponent],
            imports: [MatButtonModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AnswerComponent);
        component = fixture.componentInstance;
        const mockTheme = {buttonColour: "green"};
        const mockAnswer = {ans: "baz"};
        component.theme = mockTheme;
        component.answer = mockAnswer;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
