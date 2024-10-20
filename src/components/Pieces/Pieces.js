import './Pieces.css'

const Pieces = () => {
    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))

    position[0][0] = 'wr'
    position[7][7] = 'br'
    
    console.log(position);

    return <div 
        className='pieces'
        >
            {position.map((r,rank) =>
                r.map((f,file) => 
                    position[rank][file]
                    ? position[rank][file]
                    : null
            ))}

        </div>
}

export default Pieces