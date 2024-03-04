class Piece{
    //to-do add tiers
    constructor(public color: string, public type: string){}

    isValidMove(start: [number, number], end: [number, number]){
        throw new Error("Method 'isValidMove' must be implemented.");
    }
}

class Marshall extends Piece{
    constructor(color: string){
        super(color, "Marshall");
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
        super(color, "Pawn");
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;

        return startCol == endCol && (endRow - startRow) == 0;
    }
}

class Spy extends Piece{
    constructor(color: string){
        super(color, "Spy");
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;

        return startCol == endCol && (endRow - startRow) == 0;
    }
}

class Cannon extends Piece{
    constructor(color: string){
        super(color, "Cannon");
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
        super(color, "Fortress");
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
        super(color, "Samurai");
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
        super(color, "Captain");
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
        super(color, "Musketeer");
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;

        return startCol == endCol && (endRow - startRow) == 0;
    }
}

class Knight extends Piece{
    constructor(color: string){
        super(color, "Knight");
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (startCol == endCol && rowDifference == 1) ||
            (rowDifference == 1 && (endCol - startCol == 2))
            )
    }
}

class Archer extends Piece{
    constructor(color: string){
        super(color, "Archer");
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
        super(color, "General");
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (rowDifference <= 1 && colDifference <= 1) &&
            !(startRow - endRow == 1 && colDifference == 1)
        )
    }
}

class LieutenantGeneral extends Piece{
    constructor(color: string){
        super(color, "Lieutenant General");
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (rowDifference == 1 && colDifference <= 1) &&
            !(startRow - endRow == 1 && colDifference == 1)
        );
    }
}

class MajorGeneral extends Piece{
    constructor(color: string){
        super(color, "Major General");
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        const [startRow, startCol] = start;
        const [endRow, endCol] = end;
        const rowDifference = Math.abs(startRow - endRow);
        const colDifference = Math.abs(startCol - endCol);

        return (
            (endRow - startRow == 0 && colDifference <= 1) &&
            (endRow != endCol)
        );
    }
}

const MAX_PIECES_BY_PLAYER = 26;
