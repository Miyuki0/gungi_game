export class Piece{
    public maxTier: number;

    constructor(public color: string, public type: string, public canBeStacked: boolean, public isStacked: boolean, public subPieces: Piece[]){
        this.maxTier = 3;
    }

    isValidMove(start: [number, number], end: [number, number]): boolean{
        throw new Error("Method 'isValidMove' must be implemented.");
    }

    getStacked(){
        this.isStacked = true;
    }

    getTier(){
        return this.subPieces.length + 1;
    }

    canStackOnTopOf(piece:Piece){
        return piece.canBeStacked;
    }

    stackOnTopOf(piece:Piece){
        piece.getStacked()
        this.subPieces.push(piece);
        this.subPieces.push(piece.subPieces)

        if (this.getTier() == this.maxTier){
            this.canBeStacked = false
        }
    }
}