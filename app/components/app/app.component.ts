import {Component} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note.canvas.component";

@Component({
    selector: 'piano-app',
    template: `
        <div id="gameWrapper">
            <piano (key-pressed)="notePlayed($event)"></piano>
        </div>
    `,
    directives: [PianoComponent],
})
export class AppComponent {}