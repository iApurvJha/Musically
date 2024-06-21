import { createContext } from "react";

export const songContext = createContext({
    currSong:null,
    setCurrentSong:(currSong)=>{}
})

export default songContext