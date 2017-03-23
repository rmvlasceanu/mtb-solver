

export class Solver {
  constructor(public inputMatrix: Array<Array<number>>, public steps: number) {
  }

  private tick() {

    for (let x = this.inputMatrix.length - 1; x >= 0; x--) {
      for (let y = 0; y < this.inputMatrix[x].length; y++) {
        this.moveDown(x, y);
      }
    }
    return this.inputMatrix.toLocaleString();
  }

  private moveDown(elementX: number, elementY:number) {
    if (this.inputMatrix[elementX + 1] && this.inputMatrix[elementX + 1][elementY] == 1) {
      this.swap(elementX, elementY, elementX + 1, elementY);
      this.moveDown(elementX + 1, elementY);
    }
  }

  public swap(eX1: number, eY1: number, eX2: number, eY2:number) {
    if (this.inputMatrix[eX2] && this.inputMatrix[eX2][eY2]) {
      let aux = this.inputMatrix[eX1][eY1];
      this.inputMatrix[eX1][eY1] = this.inputMatrix[eX2][eY2];
      this.inputMatrix[eX2][eY2] = aux;
    }
  }

  private clearCompleted() {
    let fullChain: any[] = [];
    for (let x = this.inputMatrix.length - 1; x >= 0; x--) {
      for (let y = 0; y < this.inputMatrix[x].length; y++) {
        if (Math.abs(this.inputMatrix[x][y]) != 1) {

          var {length, chain} = this.getChainLength(x, y, 8);
          if (length >= 3)
            fullChain = fullChain.concat(chain)


          var {length, chain} = this.getChainLength(x, y, 2);
          if (length >= 3)
            fullChain = fullChain.concat(chain)


          var {length, chain} = this.getChainLength(x, y, 4);
          if (length >= 3)
            fullChain = fullChain.concat(chain)


          var {length, chain} = this.getChainLength(x, y, 6);
          if (length >= 3)
            fullChain = fullChain.concat(chain)

        }
      }
    }

    this.markForDestruction(fullChain);
    this.clearBlocks(-1);

    // console.log(this.inputMatrix);
    // console.log("\n\n\n");
  }

  private markForDestruction(chain: any[]) {
    for (let i in chain) {
      this.inputMatrix[chain[i].x][chain[i].y] = -1;
    }
  }

  /**
   *
   * @param x
   * @param y
   * @param dir - 8 up, 6 right, 2 down, 4 left
   */
  private getChainLength(x: number, y: number, dir:number) {
    let chain = [{x: x, y: y}];
    let offSet = {
      x: 0,
      y: 0
    }


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
    let newX = x + offSet.x;
    let newY = y + offSet.y
    while (this.inputMatrix[newX] && this.inputMatrix[newX][newY] && this.inputMatrix[x][y] == this.inputMatrix[newX][newY]) {

      chain.push({x: newX, y: newY});
      newX += offSet.x;
      newY += offSet.y;

    }
    return {length: chain.length, chain: chain};
  }

  private clearBlocks(number: number) {
    for (let l = 0; l < this.inputMatrix.length; l++) {
      for (let c = 0; c < this.inputMatrix[l].length; c++) {
        this.inputMatrix[l][c] = this.inputMatrix[l][c] == number ? 1 : this.inputMatrix[l][c];
      }
    }
  }

  public swapMove(x1: number, y1: number, x2:number, y2:number){
    this.swap(x1,y1, x2, y2);
    this.completeStep();
  }

  public completeStep() {
    let lastHash = "";
    let nowHash = this.inputMatrix.toLocaleString();

    do {
      lastHash = nowHash;
      this.tick();
      this.clearCompleted();
      nowHash = this.inputMatrix.toLocaleString();
    } while (lastHash != nowHash);

  }

  isSolution(inMat: Array<Array<number>>): boolean{
    for (let l = 0; l < inMat.length; l++) {
      for (let c = 0; c < inMat[l].length; c++) {
        if(inMat[l][c] != 1)
          return false;
      }
    }
    return true;
  }
}
//
// let solv = new Solver(inputM, 2);
// console.log(solv.isSolution(solv.inputMatrix));
// console.log(solv.inputMatrix);
// solv.swapMove(3,1, 3, 0);
// console.log(solv.inputMatrix);
// console.log(solv.isSolution(solv.inputMatrix));
