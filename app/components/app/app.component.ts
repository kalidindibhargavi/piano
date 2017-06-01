import {Component} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";

@Component({
    selector: 'piano-app',
    directives: [PianoComponent, NoteCanvasComponent],
})
export class AppComponent {}
