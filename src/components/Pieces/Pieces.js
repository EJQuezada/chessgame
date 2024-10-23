import './Pieces.css'
import Piece from './Piece'
import { useState } from 'react'
import { createPosition } from '../../helper'

const Pieces = () => {

    const [state,setState] = useState(createPosition())
    
    const onDrop = e => {
        console.log(e.dataTransfer.getData('text'));
    }
    const onDragOver = e => console.log('on drag over');
    
    return <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        className='pieces'>
        {state.map((r,rank) =>
            r.map((f,file) => 
                state[rank][file]
                ?   <Piece
                        key={rank+'-'+file}    
                        rank={rank}
                        file={file}
                        piece={position[rank][file]}
                    />
                : null
        ))}
    </div>
}

export default Pieces