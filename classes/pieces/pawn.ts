import { Piece } from "./piece";

export class Pawn extends Piece{
    constructor(color: string){
        super(color, "Pawn", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        switch (this.getTier()) {
            case (1): return this.isValidMoveT1(start, end);
            case (2): return this.isValidMoveT2(start, end);
            case (3): return this.isValidMoveT2(start, end);
            default: return false
        }
    }

    private isValidMoveT1(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;

        return startCol == endCol && (startRow - endRow) == 1;
    }

    private isValidMoveT2(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const colDifference = Math.abs(startCol - endCol)

        return colDifference <= 1 && (startRow - endRow) == 1;
    }
}