class Piece{
    constructor(public color: string, public type: string, public canBeStacked: boolean, public isStacked: boolean, public subPieces: Piece[]){}

    isValidMove(start: [number, number], end: [number, number]): boolean{
        throw new Error("Method 'isValidMove' must be implemented.");
    }

    getStacked(){
        this.isStacked = true;
    }

    getTier(){
        return this.subPieces.length + 1;
    }

    canStackOnTopOf(Piece piece){
        return piece.canBeStacked;
    }

    stackOnTopOf(Piece piece){
        piece.getStacked()
        this.subPieces.push(piece);
        this.subPieces.push(piece.subPieces)

        if (this.getTier() == MAX_TIER){
            this.canBeStacked = false
        }
    }
}

class Marshall extends Piece{
    constructor(color: string){
        super(color, "Marshall", false, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return rowDifference <= 1 && colDifference <= 1;
    }
}

class Pawn extends Piece{
    constructor(color: string){
        super(color, "Pawn", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;

        return startCol == endCol && (startRow - endRow) == 1;
    }
}

class Spy extends Piece{
    constructor(color: string){
        super(color, "Spy", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;

        return startCol == endCol && (startRow - endRow) == 1;
    }
}

class Cannon extends Piece{
    constructor(color: string){
        super(color, "Cannon", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;

        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (startCol == endCol && rowDifference == 1) ||
            (startRow == endRow && colDifference == 1)
            )
    }
}

class Fortress extends Piece{
    constructor(color: string){
        super(color, "Fortress", false, false, []);
    }

    canStackOnTopOf(Piece piece){
        return false;
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return rowDifference <= 1 && colDifference <= 1;
    }
}

class Samurai extends Piece{
    constructor(color: string){
        super(color, "Samurai", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return rowDifference == 1 && colDifference == 1;
    }
}

class Captain extends Piece{
    constructor(color: string){
        super(color, "Captain", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return rowDifference <= 1 && colDifference <= 1;
    }
}

class Musketeer extends Piece{
    constructor(color: string){
        super(color, "Musketeer", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;

        return startCol == endCol && (startRow - endRow) == 1;
    }
}

class Knight extends Piece{
    constructor(color: string){
        super(color, "Knight", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (startRow == endRow && colDifference == 1) ||
            (startRow - endRow == 2 && colDifference == 1)
            )
    }
}

class Archer extends Piece{
    constructor(color: string){
        super(color, "Archer", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return rowDifference <= 1 && colDifference <= 1;
    }
}

class General extends Piece{
    constructor(color: string){
        super(color, "General", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (rowDifference <= 1 && colDifference <= 1) &&
            !(endRow - startRow == 1 && colDifference == 1)
        )
    }
}

class LieutenantGeneral extends Piece{
    constructor(color: string){
        super(color, "Lieutenant General", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (rowDifference == 1 && colDifference <= 1) &&
            !(endRow - startRow == 1 && colDifference != 1)
        );
    }
}

class MajorGeneral extends Piece{
    constructor(color: string){
        super(color, "Major General", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (colDifference == 1 && startRow - endRow == 1)
        );
    }
}

const MAX_PIECES_BY_PLAYER = 26;
const MAX_TIER = 3;

class Board {
    private board: (Piece | null)[][];

    constructor() {
        this.board = Array(8).fill(null).map(() => Array(8).fill(null));
    }
}

class Main {
    static main() {
        function generateMoveGrid(piece: any): string[][] {
            const gridSize = 5;
            const grid: string[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill("O"));

            for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                    if (piece.isValidMove([2, 2], [row, col])) {
                        grid[row][col] = "X";
                    }
                }
            }
            grid[2][2] = "M"

            return grid;
        }

        console.log(generateMoveGrid(new MajorGeneral("")));

    }
}

// Call the main function
Main.main();
