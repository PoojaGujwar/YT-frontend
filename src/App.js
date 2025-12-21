import { useState, useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  // Fetch videos from backend
  useEffect(() => {
    fetch("http://localhost:4000/youtube/videos")
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error(err));
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  const addNote = () => {
    if (!noteTitle || !noteContent) return alert("Fill both fields");
    setNotes([...notes, { title: noteTitle, content: noteContent }]);
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>YouTube Dashboard Demo</h1>
      <button onClick={handleLogin}>Login with Google</button>

      <h2>Uploaded Videos</h2>
      {videos.map((video, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <strong>{video.title}</strong><br />
          {video.description}<br />
          Video ID: {video.videoId}<br />
          Published At: {video.publishedAt}
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <h2>Notes</h2>
        <input
          type="text"
          placeholder="Title"
          value={noteTitle}
          onChange={e => setNoteTitle(e.target.value)}
        /><br />
        <textarea
          placeholder="Content"
          value={noteContent}
          onChange={e => setNoteContent(e.target.value)}
        /><br />
        <button onClick={addNote}>Add Note</button>

        <h3>Saved Notes:</h3>
        <ul>
          {notes.map((note, i) => (
            <li key={i}><strong>{note.title}</strong>: {note.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
