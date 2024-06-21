import React from 'react'

function Music(props) {
  return (
    <>
        <div className='myMusicWrapper'>
                    
            <div className='songDetail ' >
                <div className='songThumbnailAndName'>
                    <div className='thumbanil'>
                        <img className='thumbnailImg' alt='musciThumbnail' src={props.thumbnail}></img>
                    </div>
                    <div className='artistAndSongName'>
                        <div className='songName'>{props.songName}</div>
                        <div className='artistName'>{props.artistFName}</div>


                    </div>
                </div>
                <div className='duration'>
                    {/* 3:55 */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Music
