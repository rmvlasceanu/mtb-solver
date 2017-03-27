webpackJsonp([1,4],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MTBCellType; });
var MTBCellType;
(function (MTBCellType) {
    MTBCellType[MTBCellType["Void"] = 1] = "Void";
    MTBCellType[MTBCellType["Red"] = 2] = "Red";
    MTBCellType[MTBCellType["Blue"] = 3] = "Blue";
    MTBCellType[MTBCellType["Green"] = 4] = "Green";
    MTBCellType[MTBCellType["Yellow"] = 5] = "Yellow";
    MTBCellType[MTBCellType["Purple"] = 6] = "Purple";
    MTBCellType[MTBCellType["Brown"] = 7] = "Brown";
    MTBCellType[MTBCellType["Steel"] = 8] = "Steel";
    MTBCellType[MTBCellType["Black"] = 9] = "Black";
})(MTBCellType || (MTBCellType = {}));
//# sourceMappingURL=mtb-cell-type.enum.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_mtb_cell_type_enum__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_Grid__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_Cell__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_Backtrack__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtbInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MtbInputComponent = (function () {
    function MtbInputComponent() {
        var _this = this;
        this.cellTypes = __WEBPACK_IMPORTED_MODULE_1__helpers_mtb_cell_type_enum__["a" /* MTBCellType */];
        this.generateGrid = function (event) {
            _this.solution = null;
            _this.cells = new Array();
            for (var line = 0; line < _this.grid.height; line++) {
                var cellLine = new Array();
                for (var cell = 0; cell < _this.grid.width; cell++) {
                    cellLine.push(new __WEBPACK_IMPORTED_MODULE_3__helpers_Cell__["a" /* Cell */]());
                }
                _this.cells.push(cellLine);
            }
        };
        this.cellTypeKeys = Object.keys(__WEBPACK_IMPORTED_MODULE_1__helpers_mtb_cell_type_enum__["a" /* MTBCellType */]).filter(Number);
        this.selectedColor = __WEBPACK_IMPORTED_MODULE_1__helpers_mtb_cell_type_enum__["a" /* MTBCellType */].Void;
        this.grid = new __WEBPACK_IMPORTED_MODULE_2__helpers_Grid__["a" /* Grid */](7, 5);
        this.steps = 3;
        this.inProgress = false;
        this.JSON = JSON;
        this.solution = null;
    }
    MtbInputComponent.prototype.findSolution = function () {
        var _this = this;
        this.inProgress = true;
        var input = this.cells.map(function (el) { return el.map(function (el) { return el.cellType; }); });
        var p = new Promise(function (resolve) {
            var b = new __WEBPACK_IMPORTED_MODULE_4__helpers_Backtrack__["a" /* Backtrack */]();
            b.doAllMoves(input, _this.steps);
            return resolve(b.solution);
        });
        p.then(function (r) {
            console.log("good", r);
            _this.inProgress = false;
            _this.solution = r.length > 0 ? r : null;
        });
    };
    MtbInputComponent.prototype.ngOnInit = function () {
        this.generateGrid(null);
    };
    MtbInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'move-the-box-input',
            template: __webpack_require__(521),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [])
    ], MtbInputComponent);
    return MtbInputComponent;
}());
//# sourceMappingURL=mtb-input.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 331;


/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(460);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mtb_input_mtb_input_component__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    { path: '', redirectTo: '/mtb', pathMatch: 'full' },
    { path: 'mtb', component: __WEBPACK_IMPORTED_MODULE_3__mtb_input_mtb_input_component__["a" /* MtbInputComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(519),
            styles: [__webpack_require__(514)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mtb_input_mtb_input_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mtb_cell_mtb_cell_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mtb_step_mtb_step_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__ = __webpack_require__(451);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mtb_cell_mtb_cell_component__["a" /* MtbCellComponent */],
                __WEBPACK_IMPORTED_MODULE_7__mtb_step_mtb_step_component__["a" /* MtbStepComponent */],
                __WEBPACK_IMPORTED_MODULE_5__mtb_input_mtb_input_component__["a" /* MtbInputComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Solver__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Backtrack; });

/**
 * Created by razvanvlasceanu on 3/14/17.
 */
var Backtrack = (function () {
    function Backtrack() {
        this.copy = function (obj) { return JSON.parse(JSON.stringify(obj)); };
        this.stop = false;
        this.solution = [];
    }
    Backtrack.prototype.doAllMoves = function (matrix, steps, flow) {
        if (flow === void 0) { flow = []; }
        if (this.stop)
            return flow;
        var s = new __WEBPACK_IMPORTED_MODULE_0__Solver__["a" /* Solver */](matrix, steps);
        if (s.isSolution(matrix)) {
            this.stop = true;
            this.solution = flow;
            return flow;
        }
        else if (steps <= 0) {
            return [];
        }
        if (this.stop)
            return flow;
        steps--;
        for (var l = matrix.length - 1; l >= 0; l--)
            for (var c = 0; c < matrix[l].length; c++) {
                if (matrix[l][c] == 1)
                    continue;
                if (matrix[l] && matrix[l][c + 1]) {
                    var s1 = new __WEBPACK_IMPORTED_MODULE_0__Solver__["a" /* Solver */](this.copy(matrix), steps);
                    s1.swapMove(l, c, l, c + 1);
                    var flowS1 = this.copy(flow);
                    flowS1.push({
                        from: { x: l, y: c },
                        to: { x: l, y: c + 1 }
                    });
                    this.doAllMoves(s1.inputMatrix, steps, flowS1);
                }
                if (matrix[l + 1] && matrix[l + 1][c]) {
                    var s2 = new __WEBPACK_IMPORTED_MODULE_0__Solver__["a" /* Solver */](this.copy(matrix), steps);
                    s2.swapMove(l, c, l + 1, c);
                    var flowS2 = this.copy(flow);
                    flowS2.push({
                        from: { x: l, y: c },
                        to: { x: l + 1, y: c }
                    });
                    this.doAllMoves(s2.inputMatrix, steps, flowS2);
                }
                if (matrix[l] && matrix[l][c - 1]) {
                    var s3 = new __WEBPACK_IMPORTED_MODULE_0__Solver__["a" /* Solver */](this.copy(matrix), steps);
                    s3.swapMove(l, c, l, c - 1);
                    var flowS3 = this.copy(flow);
                    flowS3.push({
                        from: { x: l, y: c },
                        to: { x: l, y: c - 1 }
                    });
                    this.doAllMoves(s3.inputMatrix, steps, flowS3);
                }
                if (matrix[l - 1] && matrix[l - 1][c]) {
                    var s4 = new __WEBPACK_IMPORTED_MODULE_0__Solver__["a" /* Solver */](this.copy(matrix), steps);
                    s4.swapMove(l, c, l - 1, c);
                    var flowS4 = this.copy(flow);
                    flowS4.push({
                        from: { x: l, y: c },
                        to: { x: l - 1, y: c }
                    });
                    this.doAllMoves(s4.inputMatrix, steps, flowS4);
                }
            }
    };
    return Backtrack;
}());
//# sourceMappingURL=Backtrack.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mtb_cell_type_enum__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });

/**
 * Created by razvanvlasceanu on 3/13/17.
 */
var Cell = (function () {
    function Cell(cellType) {
        if (cellType === void 0) { cellType = __WEBPACK_IMPORTED_MODULE_0__mtb_cell_type_enum__["a" /* MTBCellType */].Void; }
        this.cellType = cellType;
    }
    return Cell;
}());
//# sourceMappingURL=Cell.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/**
 * Created by razvanvlasceanu on 3/13/17.
 */
var Grid = (function () {
    function Grid(width, height) {
        this.width = width;
        this.height = height;
    }
    return Grid;
}());
//# sourceMappingURL=Grid.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Solver; });
var Solver = (function () {
    function Solver(inputMatrix, steps) {
        this.inputMatrix = inputMatrix;
        this.steps = steps;
    }
    Solver.prototype.tick = function () {
        for (var x = this.inputMatrix.length - 1; x >= 0; x--) {
            for (var y = 0; y < this.inputMatrix[x].length; y++) {
                this.moveDown(x, y);
            }
        }
        return this.inputMatrix.toLocaleString();
    };
    Solver.prototype.moveDown = function (elementX, elementY) {
        if (this.inputMatrix[elementX + 1] && this.inputMatrix[elementX + 1][elementY] == 1) {
            this.swap(elementX, elementY, elementX + 1, elementY);
            this.moveDown(elementX + 1, elementY);
        }
    };
    Solver.prototype.swap = function (eX1, eY1, eX2, eY2) {
        if (this.inputMatrix[eX2] && this.inputMatrix[eX2][eY2]) {
            var aux = this.inputMatrix[eX1][eY1];
            this.inputMatrix[eX1][eY1] = this.inputMatrix[eX2][eY2];
            this.inputMatrix[eX2][eY2] = aux;
        }
    };
    Solver.prototype.clearCompleted = function () {
        var fullChain = [];
        for (var x = this.inputMatrix.length - 1; x >= 0; x--) {
            for (var y = 0; y < this.inputMatrix[x].length; y++) {
                if (Math.abs(this.inputMatrix[x][y]) != 1) {
                    var _a = this.getChainLength(x, y, 8), length = _a.length, chain = _a.chain;
                    if (length >= 3)
                        fullChain = fullChain.concat(chain);
                    var _b = this.getChainLength(x, y, 2), length = _b.length, chain = _b.chain;
                    if (length >= 3)
                        fullChain = fullChain.concat(chain);
                    var _c = this.getChainLength(x, y, 4), length = _c.length, chain = _c.chain;
                    if (length >= 3)
                        fullChain = fullChain.concat(chain);
                    var _d = this.getChainLength(x, y, 6), length = _d.length, chain = _d.chain;
                    if (length >= 3)
                        fullChain = fullChain.concat(chain);
                }
            }
        }
        this.markForDestruction(fullChain);
        this.clearBlocks(-1);
        // console.log(this.inputMatrix);
        // console.log("\n\n\n");
    };
    Solver.prototype.markForDestruction = function (chain) {
        for (var i in chain) {
            this.inputMatrix[chain[i].x][chain[i].y] = -1;
        }
    };
    /**
     *
     * @param x
     * @param y
     * @param dir - 8 up, 6 right, 2 down, 4 left
     */
    Solver.prototype.getChainLength = function (x, y, dir) {
        var chain = [{ x: x, y: y }];
        var offSet = {
            x: 0,
            y: 0
        };
        switch (dir) {
            case 8:
                offSet.x = -1;
                break;
            case 6:
                offSet.y = 1;
                break;
            case 2:
                offSet.x = 1;
                break;
            case 4:
                offSet.y = -1;
                break;
            default:
                throw new Error("invalid direction");
        }
        var newX = x + offSet.x;
        var newY = y + offSet.y;
        while (this.inputMatrix[newX] && this.inputMatrix[newX][newY] && this.inputMatrix[x][y] == this.inputMatrix[newX][newY]) {
            chain.push({ x: newX, y: newY });
            newX += offSet.x;
            newY += offSet.y;
        }
        return { length: chain.length, chain: chain };
    };
    Solver.prototype.clearBlocks = function (number) {
        for (var l = 0; l < this.inputMatrix.length; l++) {
            for (var c = 0; c < this.inputMatrix[l].length; c++) {
                this.inputMatrix[l][c] = this.inputMatrix[l][c] == number ? 1 : this.inputMatrix[l][c];
            }
        }
    };
    Solver.prototype.swapMove = function (x1, y1, x2, y2) {
        this.swap(x1, y1, x2, y2);
        this.completeStep();
    };
    Solver.prototype.completeStep = function () {
        var lastHash = "";
        var nowHash = this.inputMatrix.toLocaleString();
        do {
            lastHash = nowHash;
            this.tick();
            this.clearCompleted();
            nowHash = this.inputMatrix.toLocaleString();
        } while (lastHash != nowHash);
    };
    Solver.prototype.isSolution = function (inMat) {
        for (var l = 0; l < inMat.length; l++) {
            for (var c = 0; c < inMat[l].length; c++) {
                if (inMat[l][c] != 1)
                    return false;
            }
        }
        return true;
    };
    return Solver;
}());
//
// let solv = new Solver(inputM, 2);
// console.log(solv.isSolution(solv.inputMatrix));
// console.log(solv.inputMatrix);
// solv.swapMove(3,1, 3, 0);
// console.log(solv.inputMatrix);
// console.log(solv.isSolution(solv.inputMatrix));
//# sourceMappingURL=Solver.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_mtb_cell_type_enum__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtbCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MtbCellComponent = (function () {
    function MtbCellComponent() {
    }
    MtbCellComponent.prototype.getClass = function () {
        return (__WEBPACK_IMPORTED_MODULE_1__helpers_mtb_cell_type_enum__["a" /* MTBCellType */][this.cellType] || "").toLowerCase();
    };
    MtbCellComponent.prototype.ngOnInit = function () {
    };
    MtbCellComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'mtb-cell',
            inputs: ['cellType'],
            template: __webpack_require__(520),
            styles: [__webpack_require__(515)]
        }), 
        __metadata('design:paramtypes', [])
    ], MtbCellComponent);
    return MtbCellComponent;
}());
//# sourceMappingURL=mtb-cell.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MtbStepComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MtbStepComponent = (function () {
    function MtbStepComponent() {
    }
    MtbStepComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Step)
    ], MtbStepComponent.prototype, "step", void 0);
    MtbStepComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'mtb-step',
            template: __webpack_require__(522),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [])
    ], MtbStepComponent);
    return MtbStepComponent;
}());
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Step = (function () {
    function Step(from, to) {
        this.from = from;
        this.to = to;
    }
    return Step;
}());
//# sourceMappingURL=mtb-step.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, "div {\n  width: 50px;\n  height: 50px;\n  margin: 1px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media (max-width: 400px) {\n  div{\n  width: 30px;\n  height: 30px;\n  }\n}\n\n.void {\n  background: gainsboro;\n}\n\n.red {\n  background: red;\n}\n\n.blue {\n  background: blue;\n}\n\n.green {\n  background: green;\n}\n\n.yellow {\n  background: yellow;\n}\n\n.purple {\n  background: purple;\n}\n\n.brown{\n  background: saddlebrown;\n}\n.steel{\n  background: lightsteelblue;\n}\n.black{\n  background: black;\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, ".input-group{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 200px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.input-group > label{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.matrix-line{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.grid-cell{\n  width: 50px;\n  margin: 1px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n\n@media (max-width: 400px) {\n  .grid-cell{\n    width: 30px;\n  }\n}\n\n.grid-cell.vertical{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: right;\n  padding: 6px;\n}\n\n.solution-div{\n  margin-top: 20px;\n  box-shadow: 1px 1px 1px 1px darkgreen;\n  display: inline-block;\n  padding: 10px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<div [class]=\"getClass()\">\n</div>\n"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5>Input page</h5>\n  <div class=\"input-group\">\n    <label for=\"colorSelect\">Color</label>\n    <select id=\"colorSelect\" [(ngModel)]=\"selectedColor\" [disabled]=inProgress>\n      <option *ngFor=\"let key of cellTypeKeys\" [value]=\"key\" [label]=\"cellTypes[key]\">{{cellTypes[key]}}</option>\n    </select>\n  </div>\n  <div>\n    <div class=\"input-group\"><label for=\"gridWidth\">Width:</label><input [disabled]=inProgress id=\"gridWidth\" type=\"number\" [(ngModel)]=\"grid.width\" (ngModelChange)=\"generateGrid($event)\"></div>\n    <div class=\"input-group\"><label for=\"gridHeight\">Height:</label><input [disabled]=inProgress type=\"number\" id=\"gridHeight\" [(ngModel)]=\"grid.height\" (ngModelChange)=\"generateGrid($event)\"></div>\n  </div>\n  <div class=\"matrix\">\n    <div class=\"matrix-line\">\n      <div class=\"grid-cell vertical\"></div>\n      <div class=\"grid-cell\" *ngFor=\"let cell of cells[0];let i = index\">\n        {{i}}\n      </div>\n    </div>\n    <div class=\"matrix-line\" *ngFor=\"let line of cells; let i = index\">\n      <div class=\"grid-cell vertical\">{{i}}</div>\n      <mtb-cell *ngFor=\"let cell of line\" [cellType]=\"cell.cellType\" (click)=\"cell.cellType = selectedColor\"></mtb-cell>\n    </div>\n  </div>\n  <div>\n    <div><button (click)=\"generateGrid($event)\" [disabled]=inProgress>Clear</button></div>\n    <div>\n      <label for=\"steps\">Number of steps:</label>\n      <input [disabled]=inProgress type=\"number\" id=\"steps\" [(ngModel)]=\"steps\">\n      <button [disabled]=inProgress (click)=\"findSolution()\">FIND SOLUTION</button>\n    </div>\n  </div>\n  <div>\n    <span *ngIf=\"inProgress\">Finding solution...</span>\n\n    <div *ngIf=\"!inProgress && solution\" >\n      <div class=\"solution-div\">\n        <mtb-step *ngFor=\"let step of solution\" [step]=\"step\"></mtb-step>\n      </div>\n    </div>\n    <div *ngIf=\"!inProgress && !solution \">\n      No solution!\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<div>\n  <span>Swap: </span><span>{{step.from.x + ', ' + step.from.y}}</span><span> with </span><span>{{step.to.x + ', ' + step.to.y}}</span>\n</div>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(332);


/***/ })

},[540]);
//# sourceMappingURL=main.bundle.js.map