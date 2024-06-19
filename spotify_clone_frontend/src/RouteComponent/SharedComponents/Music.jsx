import React from 'react'

function Music() {
  return (
    <>
        <div className='myMusicWrapper'>
                    
            <div className='songDetail ' >
                <div className='songThumbnailAndName'>
                    <div className='thumbanil'>
                        <img className='thumbnailImg' alt='musciThumbnail' src='https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww'></img>
                    </div>
                    <div className='artistAndSongName'>
                        <div className='songName'>Random Song</div>
                        <div className='artistName'>Apurv</div>


                    </div>
                </div>
                <div className='duration'>
                    3:55
                </div>
            </div>
        </div>
    </>
  )
}

export default Music
