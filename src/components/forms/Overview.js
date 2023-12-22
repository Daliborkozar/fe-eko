import React from "react";
import styled from "styled-components";
import { determineClosestStepen } from "../../utils/determineClosestStepen";

const OverviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow sections to wrap to the next row */
  gap: 16px; /* Add some spacing between sections */
  margin-top: 20px;
`;

const OverviewSection = styled.div`
  flex: 1;
  min-width: calc(
    33.33% - 16px
  ); /* Set the width of each section to one-third of the container width */
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: bold;
  }

  p {
    margin: 8px 0;
    span {
      margin-right: 10px;
    }
  }
`;

const Overview = ({ personalData }) => {
  const xo = Math.round((2 * personalData.footWidthLeft) / 3);
  console.log(xo);
  //const mlaDescendingLevelLeft = (2 * personalData.footWidthLeft) / 15;
  //const mlaDescendingLevelRight = (2 * personalData.footWidthRight) / 15;
  const optimalnaDubinaLevo = ((2 / 3) * personalData.footWidthLeft).toFixed(2);
  const optimalnaDubinaDesno = ((2 / 3) * personalData.footWidthRight).toFixed(2);
  const visinaSvodaLevo = (optimalnaDubinaLevo * 0.4).toFixed(2);
  const visinaSvodaDesno = (optimalnaDubinaDesno * 0.4).toFixed(2);
  const fdxL = Math.round(optimalnaDubinaLevo - personalData.mlaDepthLeft);
  const fdxD = optimalnaDubinaDesno - personalData.mlaDepthRight;
  const fdyL = Math.round(visinaSvodaLevo - personalData.mlaDepthLeft * 0.4);
  const fdyD = Math.round(visinaSvodaDesno - personalData.mlaDepthRight * 0.4);
  const procenatlevo = Math.round((fdyL / visinaSvodaLevo) * 100);
  const procenatDesno = Math.round((fdyD / visinaSvodaDesno) * 100);
  const stepenLevo = Math.round((fdxL / optimalnaDubinaLevo) * 100)
  const stepenDesno = Math.round((fdxD / optimalnaDubinaDesno) * 100)
  const mlaEvelLeft = determineClosestStepen(stepenLevo);
  const mlaEvelRight = determineClosestStepen(stepenDesno);

  return (
    <OverviewContainer>
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
        {personalData.legLengthDifference && (
          <p>
            <span>Leg Length Difference: </span>
            <span>{personalData.legLengthDifference} mm</span>
          </p>
        )}
        {personalData.selectedLeg && (
          <p>
            <span>Selected Leg: </span>
            <span>{personalData.selectedLeg}</span>
          </p>
        )}
        <p>
          <span>Footprint Split (Left): </span>
          <span>{personalData.leftFootprintSplit ? "Yes" : "No"}</span>
        </p>
        <p>
          <span>Footprint Split (Right): </span>
          <span>{personalData.rightFootprintSplit ? "Yes" : "No"}</span>
        </p>
      </OverviewSection>
      <OverviewSection>
        <h2>Foot Parameters Left</h2>
        <p>
          <span>Optimal MLA Depth (mm): </span>
          <span>{Math.round(optimalnaDubinaLevo)}mm</span>
        </p>
        <p>
          <span>Optimal MLA Height (mm): </span>
          <span>{Math.round(visinaSvodaLevo)} mm</span>
        </p>
        <p>
          <span>FDx [mm] (Spuštenost svoda po X osi u mm): </span>
          <span>{Math.round(fdxL)}mm</span>
        </p>
        <p>
          <span>Fdy [mm] (spuštenost svoda po Y osi u mm): </span>
          <span>
            {Math.round(visinaSvodaLevo - personalData.mlaDepthLeft * 0.4)}mm
          </span>
        </p>
        <p>
          <span>MLA Descending: </span>
          <span>{procenatlevo}%</span>
        </p>
        {/* <p>
          <span>Y [mm] (visina svoda): </span>
          <span>{(personalData.mlaDepthLeft * 0.4).toFixed(2)} mm</span>
        </p> */}
        <p>
          <span>MLA Descending level: </span>
          <span>{mlaEvelLeft}</span>
        </p>
      </OverviewSection>
      <OverviewSection>
        <h2>Foot Parameters Right</h2>
        <p>
          <span>Optimal MLA Depth (mm):</span>
          <span>{Math.round(optimalnaDubinaDesno)}mm</span>
        </p>
        <p>
          <span>Optimal MLA Height (mm):</span>
          <span>{Math.round(visinaSvodaDesno)} mm</span>
        </p>
        <p>
          <span>FDx [mm] (Spuštenost svoda po X osi u mm): </span>
          <span>{Math.round(fdxD)}mm</span>
        </p>
        <p>
          <span>Fdy [mm] (spuštenost svoda po Y osi u mm): </span>
          <span>
            {Math.round(visinaSvodaDesno - personalData.mlaDepthRight * 0.4)}mm
          </span>
        </p>
        <p>
          <span>MLA Descending: </span>
          <span>{procenatDesno}%</span>
        </p>
        {/* <p>
          <span>Y [mm] (visina svoda): </span>
          <span>{(personalData.mlaDepthLeft * 0.4).toFixed(2)} mm</span>
        </p> */}
        <p>
          <span>MLA Descending level: </span>
          <span>{mlaEvelRight}</span>
        </p>
      </OverviewSection>
    </OverviewContainer>
  );
};

export { Overview };
