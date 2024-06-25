import React from 'react'
import { Icon } from '@iconify/react';

function Search() {
  return (
    <div className='searchOuterDiv'>
        <div className='searchInnerDiv' >
            <span ><Icon icon="iconamoon:search" width="3rem" height="2rem"  style={{color: "white"}} /></span>
            <input className='searchInput' placeholder='what do you want to listen'></input>
        </div>

      
    </div>
  )
}

export default Search
