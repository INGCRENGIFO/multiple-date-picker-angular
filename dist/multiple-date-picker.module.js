"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// add DateClicked Helper to providers if used in future. remember to add to index.ts for export
var index_1 = require("./index");
var MultipleDatePickerModule = (function () {
    function MultipleDatePickerModule() {
    }
    MultipleDatePickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule
                    ],
                    declarations: [
                        index_1.MultipleDatePickerComponent,
                        index_1.DateClickedDirective
                    ],
                    providers: [
                        index_1.DateRangeHelper
                    ],
                    exports: [index_1.MultipleDatePickerComponent]
                },] },
    ];
    /** @nocollapse */
    MultipleDatePickerModule.ctorParameters = function () { return []; };
    return MultipleDatePickerModule;
}());
exports.MultipleDatePickerModule = MultipleDatePickerModule;
