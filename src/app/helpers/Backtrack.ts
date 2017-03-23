import {Solver} from "./Solver";
/**
 * Created by razvanvlasceanu on 3/14/17.
 */
export class Backtrack {
  private copy = (obj: any) => JSON.parse(JSON.stringify(obj));
  private stop = false;
  public solution: any[] = [];

  doAllMoves(matrix: Array<Array<number>>, steps: number, flow: Array<any> = []){
    if(this.stop)
      return flow;

    let s = new Solver(matrix, steps);

    if(s.isSolution(matrix)){
      this.stop = true;
      this.solution = flow;
      return flow;
    }
    else if(steps <= 0) {
      return [];
    }

    if(this.stop)
      return flow;

    steps--;
    for(let l=matrix.length-1; l>=0; l--)
      for(let c=0; c<matrix[l].length; c++){

        if(matrix[l][c] == 1) continue;

        if(matrix[l] && matrix[l][c+1]) {
          let s1: Solver = new Solver(this.copy(matrix), steps);
          s1.swapMove(l, c, l, c + 1);
          let flowS1 = this.copy(flow);
          flowS1.push({
            from: {x: l, y: c},
            to: {x: l, y: c + 1}
          });
          this.doAllMoves(s1.inputMatrix, steps, flowS1);
        }

        if(matrix[l+1] && matrix[l+1][c]) {
          let s2: Solver = new Solver(this.copy(matrix), steps);
          s2.swapMove(l, c, l + 1, c);
          let flowS2 = this.copy(flow);
          flowS2.push({
            from: {x: l, y: c},
            to: {x: l + 1, y: c}
          });
          this.doAllMoves(s2.inputMatrix, steps, flowS2);
        }

        if(matrix[l] && matrix[l][c-1]) {
          let s3: Solver = new Solver(this.copy(matrix), steps);
          s3.swapMove(l, c, l, c - 1);
          let flowS3 = this.copy(flow);
          flowS3.push({
            from: {x: l, y: c},
            to: {x: l, y: c - 1}
          });
          this.doAllMoves(s3.inputMatrix, steps, flowS3);
        }

        if(matrix[l-1] && matrix[l-1][c]) {
          let s4: Solver = new Solver(this.copy(matrix), steps);
          s4.swapMove(l, c, l - 1, c);
          let flowS4 = this.copy(flow);
          flowS4.push({
            from: {x: l, y: c},
            to: {x: l - 1, y: c}
          });
          this.doAllMoves(s4.inputMatrix, steps, flowS4);
        }
      }
  }
}
