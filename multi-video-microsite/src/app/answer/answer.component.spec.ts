import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {AnswerComponent} from "./answer.component";
import {MatButtonModule} from "@angular/material/button";

describe("AnswerComponent", () => {
    let component: AnswerComponent;
    let fixture: ComponentFixture<AnswerComponent>;

    beforeEach(waitForAsync(() => {
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
