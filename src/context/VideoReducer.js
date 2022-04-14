const VideoReducer = (state, action)=>{
    if(action.type === 'UPDATE_VIDEOS'){
        // localStorage.setItem("videos", JSON.stringify(action.payload));
        return {
            videos: action.payload
        }
    }
}

export default VideoReducer;
