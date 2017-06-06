System.register(["angular2/core", "../../services/ScoreTracker", 'rxjs/add/operator/filter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ScoreTracker_1;
    var ScoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ScoreTracker_1_1) {
                ScoreTracker_1 = ScoreTracker_1_1;
            },
            function (_1) {}],
        execute: function() {
            ScoreComponent = (function () {
                function ScoreComponent(tracker) {
                    this.tracker = tracker;
                    this.notes = [];
                    this.scoreTracker = tracker;
                }
                ScoreComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var note;
                    this.scoreTracker.todos$.subscribe(function (notes) {
                        note = notes[notes.length - 1];
                        _this.notes.push(note);
                    });
                };
                ScoreComponent.prototype.resetScore = function () {
                    this.scoreTracker.resetScore();
                };
                ScoreComponent = __decorate([
                    core_1.Component({
                        selector: 'score',
                        styleUrls: ['app/components/score/score.component.css'],
                        template: "\n    <div class=\"score-wrapper\">\n        <div class=\"score-wrapper__content\">\n            <p>Total Notes: {{ scoreTracker.totalNotesPlayed }} of {{ scoreTracker.notesLimit }}</p>\n        </div>\n    </div>\n    ",
                        inputs: ['generatedNote', 'userIsCorrect', 'gameIsStarted']
                    }), 
                    __metadata('design:paramtypes', [ScoreTracker_1.ScoreTracker])
                ], ScoreComponent);
                return ScoreComponent;
            }());
            exports_1("ScoreComponent", ScoreComponent);
        }
    }
});
//# sourceMappingURL=score.component.js.map