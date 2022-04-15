import axios from "axios";
const ApiKey = process.env.REACT_APP_API_KEY_PLAYLIST_1;
const ApiKey2 = process.env.REACT_APP_API_KEY_PLAYLIST_2;
export const fetchVideos = async ({playlistId}, dispatch)=>{
    const url1 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${ApiKey}`;   
    try{
        const response = await axios.get(url1);
        const filteredData = response.data.items.map((item) => {
            return {
                id: item.id,
                title: item.snippet.title,
                desc: item.snippet.description,
                vid: item.contentDetails.videoId,
                publishedAt: item.snippet.publishedAt,
                channelTitle: item.snippet.channelTitle,
                imageURL: item.snippet.thumbnails.medium.url,
                imageURLDefault: item.snippet.thumbnails.default.url,
                videoOwner : item.snippet.videoOwnerChannelTitle
            };
        });

        let filteredData2;
        if(response.data.nextPageToken){
            const nextPageToken = response.data.nextPageToken;
            const url2 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&pageToken=${nextPageToken}&playlistId=${playlistId}&key=${ApiKey2}`
            const response2 = await axios.get(url2);
            filteredData2 = response2.data.items.map((item) => {
                return {
                    id: item.id,
                    title: item.snippet.title,
                    desc: item.snippet.description,
                    vid: item.contentDetails.videoId,
                    publishedAt: item.snippet.publishedAt,
                    channelTitle: item.snippet.channelTitle,
                    imageURL: item.snippet.thumbnails.medium.url,
                    imageURLDefault: item.snippet.thumbnails.default.url,
                    videoOwner : item.snippet.videoOwnerChannelTitle
                };
            });
        }
        let payload;
        filteredData2 ? payload = [...filteredData, ...filteredData2] : payload = filteredData;
        dispatch({type: "UPDATE_VIDEOS" , payload: payload})
    }catch(error){
        dispatch({type: "UPDATE_FAILURE", payload: error.message})
    }
}
