# Video player

This is a VAST video player library for use in Rezonence Angular projects.

## Using the library
1. Add `"@rezonence/video-player": "link:../../angular-packages/video-player"` to the dependencies in your project's `package.json` and install.
2. Import the library by adding `import {VideoPlayerModule} from "@rezonence/video-player";` to the top of your module file and including `VideoPlayerComponent` in the @NgModule block's imports array.
3. Import the required assets by adding `{"glob": "**/*", "input": "../../node_modules/@rezonence/video-player/assets", "output": "./assets/"}` to the `assets` array under the `build` field of your `angular.json` file.
4. The video player component allows you to input a VAST tag, set volume level (0-1) and toggle autoplay and loop modes on and off.
It also emits an event when the video completes.
5. Use it in your templates like so:   

    `<rez-video-player [vastTagUrl]="'https://foo.bar.com'"
                       [loop]="true"
                       [volume]="0"
                       [autoplay]="false"
                       (videoCompleted)="onVideoComplete()></rez-video-player>`
                       
## Development
1. Build the library with the `yarn build` command. Add the `-- --watch` tag to enable hot-reloading.
2. For development purposes there is a `video-player-showcase` project alongside the library in the `angular-packages` directory. Serve it with `yarn start`.
3. The tests are written with Karma. Run them from the `video-player` directory with `yarn test`.
