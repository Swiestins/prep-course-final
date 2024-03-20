export type XO = "X" | "O" | "-";

export class Game {

  cells: XO[]= ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
  turn : XO = "X";
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    const cells=this.getCells()
    //ROWS
    
    if(cells[0] === cells[1] && cells[1]===cells[2]){
      return cells[0]
    }
    if(cells[3] === cells[4] && cells[4]===cells[5]){
      return cells[3]
    }
    if(cells[6] === cells[7] && cells[7]===cells[8]){
      return cells[6]
    }
    //COLLUMNS
    if(cells[0] === cells[4] && cells[4]===cells[6]){
      return cells[6]
    }
    if(cells[1] === cells[5] && cells[5]===cells[7]){
      return cells[7]
    }
    if(cells[2] === cells[6] && cells[6]===cells[8]){
      return cells[8]
    }
    //rows
    if(cells[0] === cells[4] && cells[4]===cells[8]){
      return cells[8]
    }
    if(cells[2] === cells[4] && cells[4]===cells[6]){
      return cells[6]
    }
    return "-";
  }

  isTie(): boolean {
    if(this.getWinner()==="-"&& !this.getCells().includes("-")){
      return true
    }
    return false;
  }

  onClick(i: number): void {
    if (this.cells[i]==="-"){
    this.cells[i]=this.turn
    this.turn = this.turn === "X" ? "O":"X"
    }
  }

  restart(): void {
    this.cells= ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
    this.turn= "X";
  }
}
