'use client';
import useSpotlightEffect from './spotLightEffect';

const SpotlightCursor = ({ config = {}, className = '', ...rest }) => {
  const spotlightConfig = {
    spotlightSize: 200,
    spotlightIntensity: 0.8,
    fadeSpeed: 0.1,
    glowColor: '255, 255, 255',
    pulseSpeed: 2000,
    ...config,
  };

  const canvasRef = useSpotlightEffect(spotlightConfig);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-9999 w-full h-full ${className}`}
      {...rest}
    />
  );
};

export default SpotlightCursor;