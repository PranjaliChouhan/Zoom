import React, { useReducer } from 'react';
import { ImZoomIn, ImZoomOut } from 'react-icons/im';

const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 3;
// Reducer function to handle image zoom state
const imageZoomReducer = (state, action) => {
    switch (action.type) {
      case 'ZOOM_IN':
        return { ...state, zoomLevel: Math.min(state.zoomLevel + 0.1, MAX_ZOOM) };
      case 'ZOOM_OUT':
        return { ...state, zoomLevel: Math.max(state.zoomLevel - 0.1, MIN_ZOOM) };
      case 'RESET_ZOOM':
        return { ...state, zoomLevel: 1, positionX: 0, positionY: 0 };
      case 'PAN_IMAGE':
        return { ...state, positionX: action.positionX, positionY: action.positionY };
      default:
        return state;
    }
  };

const ZoomableImage = ({ imageUrl }) => {
  const initialState = { zoomLevel: 1, positionX: 0, positionY: 0 };
  const [state, dispatch] = useReducer(imageZoomReducer, initialState);
  
 

  const handleZoomIn = () => {
    dispatch({ type: 'ZOOM_IN' });
  };

  const handleZoomOut = () => {
    dispatch({ type: 'ZOOM_OUT' });
  };

  const handleResetZoom = () => {
    dispatch({ type: 'RESET_ZOOM' });
  };

  

  return (
    <>
    <div className='zoom'>
     <div style={{ 
          transform: `scale(${Math.min(Math.max(state.zoomLevel, MIN_ZOOM), MAX_ZOOM)}) translate(${state.positionX}px, ${state.positionY}px)`
           // Set transform origin to top left when shouldFlip is true
       }}>
        <div className='img'>
        <img
          className='image-container'
          src={imageUrl}
          alt="ZoomableImage"
         
        
        />
        </div>
      </div>
      <div className='btn'>
      <button className='btn-handle' onClick={handleZoomIn}>Zoom-In <ImZoomIn style={{ marginLeft: '6px' }}/></button>
      <button className='btn-handle'onClick={handleZoomOut}>Zoom-Out<ImZoomOut style={{ marginLeft: '6px' }}/></button>
      <button className='btn-handle' onClick={handleResetZoom}>Reset Zoom</button>
      </div>
      </div>
    </>
  );
};

export default ZoomableImage;
