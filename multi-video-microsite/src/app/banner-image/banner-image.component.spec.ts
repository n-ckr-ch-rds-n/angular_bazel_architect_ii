import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {BannerImageComponent} from "./banner-image.component";
import {LinkPipe} from "../link.pipe";

describe("BannerComponent", () => {
    let component: BannerImageComponent;
    let fixture: ComponentFixture<BannerImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BannerImageComponent,
                LinkPipe
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BannerImageComponent);
        component = fixture.componentInstance;
        const mockImage = {img: "foo", lnk: "bar"};
        component.image = mockImage;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
