import { Piece } from "./pieces/piece";

export class Board {
    private BOARD_SIZE: number = 8;
    private board: (Piece | null)[][];


    constructor() {
        this.board = Array(this.BOARD_SIZE).fill(null).map(() => Array(this.BOARD_SIZE).fill(null));
    }

    public canPlacePiece(x:number, y:number): boolean{
        return this.board[x][y] != null;
    }

    public placePiece(piece:Piece, stock:Piece[], x:number, y:number){
        this.board[x][y] = piece;
        // to-do remove piece from stock
    }

    public movePiece(piece: Piece, x:number, y:number){
        if (this.board[x][y] == null){
            this.board[x][y] = piece;
        } else {
            let defPiece:Piece = this.board[x][y]
            if (defPiece.getTier() == 3){
                // only 'kill' the top of the tower
                this.board[x][y] = defPiece.subPieces[0];
            } else {
                // player can choose to attack or to stack
                let action=""
                if (action == "stack"){
                    piece.stackOnTopOf(defPiece)
                    // skin edit
                    this.board[x][y] = piece;
                } else {
                    // attack mode 
                    if (defPiece.getTier() > 1){
                        this.board[x][y] = defPiece.subPieces[0];
                    } else {
                        this.board[x][y] = piece
                    }
                }
            }
        }
    }

    public highlightMoves(piece: Piece, x:number, y:number){
        for (let row = 0; row < this.BOARD_SIZE; row++) {
                for (let col = 0; col < this.BOARD_SIZE; col++) {
                    if (piece.isValidMove([x, y], [row, col])) {
                        // valid
                    }
                }
            }
    }
}