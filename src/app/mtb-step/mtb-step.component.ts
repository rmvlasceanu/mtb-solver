import {Component, OnInit, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'mtb-step',
  templateUrl: './mtb-step.component.html',
  styleUrls: ['./mtb-step.component.css' ]
})
export class MtbStepComponent implements OnInit{


  @Input() step: Step

  ngOnInit(): void {

  }
}


class Point{
  constructor(public x: number, public y:number){}
}
class Step{
  constructor(public from: Point, public to: Point){}
}
