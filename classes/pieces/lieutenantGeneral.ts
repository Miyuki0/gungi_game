import { Piece } from "./piece";

export class LieutenantGeneral extends Piece{
    constructor(color: string){
        super(color, "Lieutenant General", true, false, []);
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        switch (this.getTier()) {
            case (1): return this.isValidMoveT1(start, end);
            case (2): return this.isValidMoveT2(start, end);
            case (3): return this.isValidMoveT3(start, end);
            default: return false
        }
    }

    private isValidMoveT1(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (rowDifference == 1 && colDifference <= 1) &&
            !(endRow - startRow == 1 && colDifference != 1)
        );
    }

    private isValidMoveT2(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return rowDifference == 1 && colDifference <= 1;
    }

        private isValidMoveT3(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return rowDifference <= 1 && colDifference <= 1;
    }
}