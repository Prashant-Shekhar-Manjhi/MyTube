export const updateVideo = (videos)=>({
    type:"UPDATE_VIDEOS",
    payload: videos
})

export const updateFailure = (error)=>({
    typy:"UPDATE_FAILURE",
    payload:error
});
