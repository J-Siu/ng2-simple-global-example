"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_simple_global_1 = require("ng2-simple-global");
var Com2Component = (function () {
    function Com2Component(sg) {
        this.sg = sg;
    }
    Com2Component.prototype.ngOnInit = function () {
    };
    return Com2Component;
}());
Com2Component = __decorate([
    core_1.Component({
        selector: 'app-com2',
        template: "<p>Component com2</p><input type=\"text\" [(ngModel)]=\"sg.gv\" placeholder=\"{{sg.placeholder}}\">"
    }),
    __metadata("design:paramtypes", [ng2_simple_global_1.SimpleGlobal])
], Com2Component);
exports.Com2Component = Com2Component;
//# sourceMappingURL=com2.component.js.map