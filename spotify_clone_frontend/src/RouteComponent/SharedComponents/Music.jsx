import React from 'react'
import { useContext } from 'react'
import songContext from '../../Context/SongContext'

function Music(props) {
    // const val = useContext(songContext)
    // console.log(val)
    const {currSong,setCurrSong} = useContext(songContext)

  return (
    <>
        <div className='myMusicWrapper' onClick={()=>{
            setCurrSong(props)
            
        }}>
                    
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
