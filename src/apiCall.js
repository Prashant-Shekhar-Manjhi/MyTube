import axios from "axios";
export const fetchVideos = async (urls, dispatch)=>{
    try{
        const response = await axios.get(urls.url1);
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
        const response2 = await axios.get(urls.url2);
        const filteredData2 = response2.data.items.map((item) => {
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
        dispatch({type: "UPDATE_VIDEOS" , payload: [...filteredData, ...filteredData2]})
    }catch(error){
        console.log(error)
    }
}
