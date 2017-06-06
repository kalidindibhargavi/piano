import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";
import {INotePosition} from "../../contracts/INotePosition";
import {Input} from "angular2/core";

@Component({
    selector: 'note-canvas',
    styleUrls: ['app/components/note-canvas/note-canvas.component.css'],
    templateUrl: 'app/components/note-canvas/note-canvas.component.html',
    inputs: ['note']
})

export class NoteCanvasComponent {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    @Input() keyPressed : any;
    @Input() note: INotePosition;
    constructor(private element: ElementRef) {
        this.canvas = this.element.nativeElement.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
    }
    private drawImage(url: string, x: number = 0, y: number = 0) {
        const image = new Image();
        image.src = url;
        image.onload = () => {
            this.context.drawImage(image, x, y);
        };
    }
    private drawNote(note: INotePosition ){
        this.clearCanvas();
        if (note) {
            this.drawImage('app/components/note-canvas/images/' + note.imageName + '.png', 450, note.yPos);
            if (note.type){
                this.drawImage('app/components/note-canvas/images/' + note.type + '.png', 410, note.keyNumber >= 39 && note.keyNumber <= 52 ? note.yPos + 30 : note.yPos - 30);
            }
        }
    }
    public updateCanvas(note: INotePosition){
        this.drawNote(note);
    }
    public clearCanvas() {
        this.context.clearRect(0, 0, 900, 500);
    }
}