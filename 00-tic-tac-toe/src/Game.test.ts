import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("it should put X on clicked cell", () => {
    const game = new Game();
    game.onClick(0)
    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should not be clicked already", () => {
    const game = new Game();
    game.onClick(0)
    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should show winner if first row filled with Xs", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)
    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "O",
      "O",
      "-",
      "-",
      "-",
      "-",
    ]);
    //expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
});
