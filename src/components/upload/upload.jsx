import { useRef, useState, useEffect } from "react";
import Video from "./video.jsx";
import VideoSidebar from "./videoSidebar.jsx";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cornersReset } from '../../slices/cornersSlice.jsx';
import { Container } from "../common";

const Upload = () => {
  const [piecesModelRef, xcornersModelRef] = useOutletContext();
  const dispatch = useDispatch();

  const [text, setText] = useState([]);
  const [playing, setPlaying] = useState(false);
  
  const videoRef = useRef(null);
  const playingRef = useRef(playing);
  const canvasRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  useEffect(() => {
    dispatch(cornersReset())
  }, []);

  return (
    <Container>
      <VideoSidebar videoRef={videoRef} piecesModelRef={piecesModelRef} xcornersModelRef={xcornersModelRef} 
      canvasRef={canvasRef} setText={setText} sidebarRef={sidebarRef} playing={playing} setPlaying={setPlaying}
      text={text} />
      <Video modelRef={piecesModelRef} videoRef={videoRef} canvasRef={canvasRef} sidebarRef={sidebarRef} 
      playing={playing} setPlaying={setPlaying} playingRef={playingRef} setText={setText} />
    </Container>
  );
};

export default Upload;
