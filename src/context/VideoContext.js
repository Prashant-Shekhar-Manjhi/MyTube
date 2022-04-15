import  {createContext, useReducer} from "react";
import VideoReducer from "./VideoReducer";
const INITIAL_STATE = {
    videos:JSON.parse(localStorage.getItem("videos")) || null,
    error:false
};

export const VideoContext = createContext(INITIAL_STATE);
export const VideoContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(VideoReducer, INITIAL_STATE);
    // useEffect(() => {
    //     localStorage.setItem("loggedInUser",JSON.stringify(state.videos));    
    // }, [state.videos]);
    return (
        <VideoContext.Provider value={{videos: state.videos, error:state.error, dispatch}}>
            {children}
        </VideoContext.Provider>
    );
}