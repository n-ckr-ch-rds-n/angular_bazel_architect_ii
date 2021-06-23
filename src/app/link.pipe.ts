import {Pipe, PipeTransform} from "@angular/core";
import {MicrositeService} from "./microsite.service";

@Pipe({
    name: "link"
})
export class LinkPipe implements PipeTransform {

    constructor(private micrositeService: MicrositeService) {
    }

    async transform(link: string): Promise<string> {
        return this.micrositeService.translateSource(link);
    }

}
