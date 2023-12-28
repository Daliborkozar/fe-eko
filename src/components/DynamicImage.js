import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const DynamicImage = ({ imageName }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        // Construct the image file name based on the dynamic value
        const imageNamePng = `${imageName}.png`;

        // Dynamically import the image
        const imageModule = await import(`../assets/${imageNamePng}`);
        setImageSrc(imageModule.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [imageName]);

  return (
    <Box sx={{ margin: 0, padding: 0}}>
      {imageSrc && (
        <img src={imageSrc} width="150px" height="410px" alt={imageName} style={{ margin: 0, padding: 0 }}/>
      )}
    </Box>
  );
};

export { DynamicImage };
