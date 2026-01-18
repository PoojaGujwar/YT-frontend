import { useEffect, useState } from "react";
import axios from "axios"

function Dashboard() {
  const [videos, setVideos] = useState();

 useEffect(() => {
 const fetchVideo = async()=>{
const res = await axios.get("https://yt-backend-swart.vercel.app/videos", {
  withCredentials: "true"
})
console.log(res.data)
setVideos(res.data)
 }
fetchVideo()
  
},[]);


  return (
    <div style={{ padding: 40 }}>
      <h2>Your Videos</h2>
      {videos && (
        <>
          <h3>Title: {videos.snippet.title}</h3>
          <p>Description: {videos.snippet.description}</p>
        </>
      )}
    </div>
  );
}

export default Dashboard;
