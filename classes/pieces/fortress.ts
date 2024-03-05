import { Piece } from "./piece";

export class Fortress extends Piece{
    constructor(color: string){
        super(color, "Fortress", false, false, []);
        this.maxTier = 1;
    }

    canStackOnTopOf(piece:Piece){
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