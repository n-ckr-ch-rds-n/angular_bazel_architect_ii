import {Injectable} from "@angular/core";
import {FreeWallData} from "@rezonence/sdk";
import {Microsite} from "@rezonence/sdk";
import {MicrositeConfig} from "./config/microsite.config";
import {environment} from "../environments/environment";
import {FreeWallConfig} from "@rezonence/core/config-extractor/freewall/freewall.config";
import {LinkRendererService} from "./link.renderer.service";

@Injectable({
  providedIn: "root"
})
export class MicrositeService extends Microsite {

  constructor(linkRenderer: LinkRendererService) {
    super(linkRenderer, window);
  }

  async getConfig(): Promise<MicrositeConfig> {
    return environment.config || super.extractConfig<MicrositeConfig>();
  }

  async getFreeWallData(): Promise<FreeWallData> {
    return environment.freeWallData || super.getFreeWallData();
  }

  async getFreewallConfig(): Promise<FreeWallConfig> {
    return environment.freeWallConfig || await this.extractFreewallConfig();
  }

  private async extractFreewallConfig(): Promise<FreeWallConfig> {
    const data = await this.getFreeWallData();
    return data.config;
  }
}
