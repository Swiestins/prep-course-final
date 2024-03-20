import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";

  setDirection(newDirection: Direction) {
    //ifi lai nevar iet uz atpakaļu 
    this.direction = newDirection;
  }

  move() {
    const oldHead = new Cell(this.head.x, this.head.y);
if(this.direction==="Right"){
    this.head = new Cell(this.head.x + 1, this.head.y);
    this.tail.shift();
    this.tail.push(oldHead);
}
else if(this.direction==="Down"){
  this.head=new Cell(this.head.x,this.head.y+1)
  this.tail.shift();
  this.tail.push(oldHead);
}
else if(this.direction==="Left"){
  this.head=new Cell(this.head.x-1,this.head.y)
  this.tail.shift();
  this.tail.push(oldHead);
}
else if(this.direction==="Up"){
  this.head=new Cell(this.head.x,this.head.y-1)
  this.tail.shift();
  this.tail.push(oldHead);
}
  }

  grow() {}

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return "Right";
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    return false;
  }
}
