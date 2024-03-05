import { Board } from "./classes/board";
import { Piece } from "./classes/pieces/piece";
import { Archer } from "./classes/pieces/archer";
import { Cannon } from "./classes/pieces/cannon";
import { Captain } from "./classes/pieces/captain";
import { Fortress } from "./classes/pieces/fortress";
import { General } from "./classes/pieces/general";
import { Knight } from "./classes/pieces/knight";
import { LieutenantGeneral } from "./classes/pieces/lieutenantGeneral";
import { MajorGeneral } from "./classes/pieces//majorGeneral";
import { Marshall } from "./classes/pieces/marshall";
import { Musketeer } from "./classes/pieces/musketeer";
import { Pawn } from "./classes/pieces/pawn";
import { Samurai } from "./classes/pieces/samurai";
import { Spy } from "./classes/pieces/spy";



const MAX_PIECES_BY_PLAYER = 26;

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

        
        // 38 pieces by player

        let blackPiecesStock = [new Marshall("black")];
        let whitePiecesStock = [new Marshall("white")];

    // Factory function to create pieces
    function createPiece(type: string, color: string): any {
        switch (type) {
            case "MajorGeneral":
                return new MajorGeneral(color);
            case "LieutenantGeneral":
                return new LieutenantGeneral(color);
            case "General": 
                return new General(color);
            case "Archer": 
                return new Archer(color);
            case "Knight":
                return new Knight(color);
            case "Musketeer":
                return new Musketeer(color);
            case "Captain":
                return new Captain(color);
            case "Samurai":
                return new Samurai(color);
            case "Fortress":
                return new Fortress(color);
            case "Cannon":
                return new Cannon(color);
            case "Spy":
                return new Spy(color);
            case "Pawn":
                return new Pawn(color);
            case "Marshall":
                return new Marshall(color);                
            default:
                throw new Error(`Invalid piece type: ${type}`);
        }
    }

        function addPiecesToStock(pieceType: string, count: number) {
            for (let i = 0; i < count; i++) {
                blackPiecesStock.push(createPiece(pieceType, "black"));
                whitePiecesStock.push(createPiece(pieceType, "white"));
            }
        }

        addPiecesToStock("Marshall", 1);
        addPiecesToStock("Pawn", 9);
        addPiecesToStock("Spy", 2);
        addPiecesToStock("Cannon", 2);
        addPiecesToStock("Fortress", 2);
        addPiecesToStock("Samurai", 2);
        addPiecesToStock("Captain", 1);
        addPiecesToStock("Musketeer", 1);
        addPiecesToStock("Knight", 2);
        addPiecesToStock("Archer", 2);
        addPiecesToStock("General", 6);
        addPiecesToStock("LieutenantGeneral", 4);
        addPiecesToStock("MajorGeneral", 4);

    }
}

// Call the main function
Main.main();

