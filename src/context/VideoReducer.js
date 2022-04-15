const VideoReducer = (state, action)=>{
    if(action.type === 'UPDATE_VIDEOS'){
        // localStorage.setItem("videos", JSON.stringify(action.payload));
        return {
            videos: action.payload
        }
    }
    else if(action.type === 'UPDATE_FAILURE'){
        return {
            videos: null,
            error: action.payload,
        }
    }
}

export default VideoReducer;
