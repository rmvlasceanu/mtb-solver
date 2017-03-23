import {Component, OnInit, EventEmitter} from "@angular/core";
import {MTBCellType} from "../helpers/mtb-cell-type.enum";
import {Grid} from "../helpers/Grid";
import {Cell} from "../helpers/Cell";
import {Backtrack} from "../helpers/Backtrack";
import Promise = promise.Promise;
import {promise} from "selenium-webdriver";

@Component({
  moduleId: module.id,
  selector: 'move-the-box-input',
  templateUrl: './mtb-input.component.html',
  styleUrls: ['./mtb-input.component.css']
})
export class MtbInputComponent implements OnInit {
  selectedColor: MTBCellType;
  cellTypeKeys: any;
  cellTypes = MTBCellType;
  grid: Grid;
  cells: Array<Array<Cell>>;
  steps: number;
  inProgress: boolean;
  solution: any;
  JSON: any;

  generateGrid = (event: any) => {
    this.solution = null;
    this.cells = new Array<Array<Cell>>();
    for (let line=0;line < this.grid.height; line++){
      let cellLine = new Array<Cell>();
      for (let cell=0; cell< this.grid.width; cell++){
        cellLine.push(new Cell());
      }
      this.cells.push(cellLine);
    }
  }

  findSolution(){
    this.inProgress = true;
    let input = this.cells.map(el => el.map(el =>  el.cellType));


    var p = new Promise((resolve) => {
      let b:Backtrack = new Backtrack();
      b.doAllMoves(input, this.steps);
      return resolve(b.solution);
    });

    p.then((r: any) => {
      console.log("good", r);
      this.inProgress = false;
      this.solution = r.length > 0 ? r : null;
    });
  }


  constructor(){
    this.cellTypeKeys = Object.keys(MTBCellType).filter(Number);
    this.selectedColor = MTBCellType.Void;
    this.grid = new Grid(7, 5);
    this.steps = 3;
    this.inProgress = false;
    this.JSON = JSON;
    this.solution = null;

  }
  ngOnInit(): void {
    this.generateGrid(null);
  }

}
