import React from 'react'

function Card(props) {
  return (
    <div className='cardOuterDiv'>
        <div className='cardImg'>
            <img className='cardImg' src={props.thumbnail} alt='playlistThumbnail' />
        </div>
        <div className='cardName'>
            <p>{props.playlistName}</p>
        </div>
      
    </div>
  )
}

export default Card
