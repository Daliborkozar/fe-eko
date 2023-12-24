const DynamicImage = ({ dynamicValue }) => {
    // Construct the image file name based on the dynamic value
    const imageName = `imageLeft${dynamicValue}.png`;
  
    // Construct the full path to the image
    const imagePath = require(`./assets/${imageName}`).default;
  
    return (
      <Box align="center">
        <img src={imagePath} width="240" height="84" alt={`Image ${dynamicValue}`} />
      </Box>
    );
  };
  
  export { DynamicImage };