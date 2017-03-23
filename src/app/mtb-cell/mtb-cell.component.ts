import {Component, OnInit} from "@angular/core";
import {MTBCellType} from "../helpers/mtb-cell-type.enum";

@Component({
  moduleId: module.id,
  selector: 'mtb-cell',
  inputs: ['cellType'],
  templateUrl: './mtb-cell.component.html',
  styleUrls: ['./mtb-cell.component.css' ]
})
export class MtbCellComponent implements OnInit{
  cellType: MTBCellType;

  getClass(){
    return (MTBCellType[this.cellType] || "").toLowerCase();
  }


  ngOnInit(): void {

  }

}
