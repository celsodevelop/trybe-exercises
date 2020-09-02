let piece = "pawn";

let move = "";

switch (piece) {
    case "pawn":
        move = "A step horizontal or vertical";
        break;
    case "knight":
        move = "Like 'L' shaped";
        break;
    case "bishop":
        move = "Diagonals"
        break;
    case "rook":
        move = "Unlimited steps horizontal or vertical"
        break;
    case "queen":
        move = "Unlimited steps horizontal, vertical, diagonals"
        break;
    case "king" :
        move = "A step horizontal, vertical or diagonal direction"
        break;
    default :
        move = "Insert a valid chessman"
}

console.log (move);