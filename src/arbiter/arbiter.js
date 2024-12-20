import { getBishopMoves, getKingMoves, getKnightMoves, getPawnCaptures, getPawnMoves, getQueenMoves, getRookMoves } from "./getMoves";

const arbiter = {
    getRegularMoves : function ({position,prevPosition,piece,rank,file}) {
        if (piece.endsWith('n'))
            return getKnightMoves({position,rank,file});
        if (piece.endsWith('b'))
            return getBishopMoves({position,piece,rank,file});
        if (piece.endsWith('r'))
            return getRookMoves({position,piece,rank,file});
        if (piece.endsWith('q'))
            return getQueenMoves({position,piece,rank,file});
        if (piece.endsWith('k'))
            return getKingMoves({position,piece,rank,file});
        if (piece.endsWith('p'))
            return getPawnMoves({position,piece,rank,file});
            //        [
            //    ...getPawnMoves({position,piece,rank,file}),
            //    ...getPawnCaptures({position,prevPosition,piece,rank,file})
        
        
            //]
            return getPawnMoves({position,piece,rank,file});
    },
}

export default arbiter