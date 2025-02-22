import { findCorners } from "../../utils/findCorners";
import { useDispatch } from 'react-redux';
import SidebarButton from "./sidebarButton";

const CornersButton = ({ piecesModelRef, xcornersModelRef, webcamRef, canvasRef, setText }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    findCorners(piecesModelRef, xcornersModelRef, webcamRef, canvasRef, dispatch, setText);
  }

  return (
    <SidebarButton onClick={handleClick}>
      Find Corners
    </SidebarButton>
  );
};

export default CornersButton;