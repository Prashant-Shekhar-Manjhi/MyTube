import  {createContext, useReducer} from "react";
import VideoReducer from "./VideoReducer";
const INITIAL_STATE = {
    videos:JSON.parse(localStorage.getItem("videos")) || null,
};

export const VideoContext = createContext(INITIAL_STATE);
export const VideoContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(VideoReducer, INITIAL_STATE);
    // useEffect(() => {
    //     localStorage.setItem("loggedInUser",JSON.stringify(state.videos));    
    // }, [state.videos]);
    return (
        <VideoContext.Provider value={{videos: state.videos, dispatch}}>
            {children}
        </VideoContext.Provider>
    );
}