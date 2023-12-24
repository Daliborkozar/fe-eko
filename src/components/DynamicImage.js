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
    <Box align="center">
      {imageSrc && (
        <img src={imageSrc} width="173px" height="450px" alt={`Image ${imageName}`} />
      )}
    </Box>
  );
};

export { DynamicImage };
