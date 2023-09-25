import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow sections to wrap to the next row */
  gap: 16px; /* Add some spacing between sections */
  margin-top: 20px;
`;

const OverviewSection = styled.div`
  flex: 1;
  min-width: calc(33.33% - 16px); /* Set the width of each section to one-third of the container width */
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    margin: 8px 0;
    span {
      font-weight: bold;
      margin-right: 4px;
    }
  }
`;

const Overview = ({ personalData }) => {

    console.log(personalData, 'logged data')
  return (
    <OverviewContainer>
      {/* Full-width section for first name, last name, and birthdate */}
      <OverviewSection>
        <h2>Personal Information</h2>
        <p>
          <span>First Name: </span>
          <span>{personalData?.firstName}</span>
        </p>
        <p>
          <span>Last Name: </span>
          <span>{personalData?.lastName}</span>
        </p>
        <p>
          <span>Birthdate: </span>
          <span>{personalData.birthdate?.toLocaleDateString()}</span>
        </p>
      </OverviewSection>
      {/* General data for left foot */}
      <OverviewSection>
        <h2>Left Foot Measurement</h2>
        <p>
          <span>Foot Length (Left): </span>
          <span>{personalData.footLengthLeft} mm</span>
        </p>
        <p>
          <span>Foot Width (Left): </span>
          <span>{personalData.footWidthLeft} mm</span>
        </p>
        <p>
          <span>MLA Depth (Left): </span>
          <span>{personalData.mlaDepthLeft} mm</span>
        </p>
        <p>
          <span>Tendon Position (Left): </span>
          <span>{personalData.tendonPositionLeft} mm</span>
        </p>
        <p>
          <span>Leg Alignment (Left): </span>
          <span>{personalData.legAlignmentLeft}</span>
        </p>
      </OverviewSection>
      {/* General data for right foot */}
      <OverviewSection>
        <h2>Right Foot Measurement</h2>
        <p>
          <span>Foot Length (Right): </span>
          <span>{personalData.footLengthRight} mm</span>
        </p>
        <p>
          <span>Foot Width (Right): </span>
          <span>{personalData.footWidthRight} mm</span>
        </p>
        <p>
          <span>MLA Depth (Right): </span>
          <span>{personalData.mlaDepthRight} mm</span>
        </p>
        <p>
          <span>Tendon Position (Right): </span>
          <span>{personalData.tendonPositionRight} mm</span>
        </p>
        <p>
          <span>Leg Alignment (Right): </span>
          <span>{personalData.legAlignmentRight}</span>
        </p>
      </OverviewSection>
      {/* Leg length difference and footprint split */}
      <OverviewSection>
        <h2>Leg Length Difference and Footprint Split</h2>
        <p>
          <span>Leg Length Difference: </span>
          <span>{personalData.legLengthDifference} mm</span>
        </p>
        <p>
          <span>Selected Leg: </span>
          <span>{personalData.selectedLeg}</span>
        </p>
        <p>
          <span>Footprint Split (Left): </span>
          <span>{personalData.leftFootprintSplit ? 'Yes' : 'No'}</span>
        </p>
        <p>
          <span>Footprint Split (Right): </span>
          <span>{personalData.rightFootprintSplit ? 'Yes' : 'No'}</span>
        </p>
      </OverviewSection>
    </OverviewContainer>
  );
};

export { Overview };
