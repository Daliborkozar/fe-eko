import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  TableBody,
} from "@mui/material";
import levo11 from "../assets/levop11.png";
import desnop11 from "../assets/desnop11.png";
import PrintIcon from "@mui/icons-material/Print";
import SendIcon from "@mui/icons-material/Send";
import Logo from "../assets/ekologo.png";
import { calculateBMI } from "../utils/utils";
import { formatDates } from "../utils/addMonths";
import { useLocation } from "react-router-dom";

const imgStyle = {
  width: "180px",
  height: "450px", // Ensures original aspect ratio
  //marginRight: "20px", // Adjust this margin as needed
};

const Wrapper = styled.div`
  background: none;
  padding: 10px 20px 20px 10px;
  margin: 0px;
`;

const NoBorderCell = styled(TableCell)`
  &&&.MuiTableCell-root {
    border: none;
    padding: 2px 1px;
  }
`;

const BoldWrapper = styled.span`
  font-weight: bold;
`;

const StyledMidTitle = styled(Box)`
  border-top: 1px solid #006633;
  border-bottom: 1px solid #006633;
  text-align: center;
  color: #006633;
`;

const StyledMainTitle = styled(Box)`
  border-top: 2px solid #006633;
  border-bottom: 2px solid #006633;
  text-align: center;
  padding: 5px 0px;
  color: #006633;
  width: 100%;
`;

const PrintButton = styled(Button)`
  @media print {
    display: none; /* Hide the button when printing */
  }
`;

const MiddleTitle = styled(Typography)`
  &.MuiTypography-root {
    text-transform: uppercase;
    font-weight: 900;
  }
`;

const personalData = {
  firstName: "Dalibor",
  lastName: "Kozar",
  identityId: "2dr3345",
  email: "daliborkozar@hotmail.com",
  phoneNumber1: "642251755",
  phoneNumber2: "",
  height: "182",
  weight: "22",
  shoeSize: "24",
  gender: "male",
  birthdate: "2023-12-10T23:00:00.000Z",
  examinationdate: "2023-12-23T10:47:58.932Z",
  footLengthLeft: "160",
  footWidthLeft: "40",
  mlaDepthLeft: "3",
  tendonPositionLeft: "",
  legAlignmentLeft: "",
  footLengthRight: "160",
  footWidthRight: "40",
  mlaDepthRight: "3",
  tendonPositionRight: "",
  legAlignmentRight: "",
  legLengthDifference: "",
  selectedLeg: "",
  leftFootprintSplit: false,
  rightFootprintSplit: false,
  therapy: {
    escSize: "24-25",
    sport: false,
    iy: 12,
    oy: 15,
    ai: 1,
    checkdate1: "2024-02-22T23:00:00.000Z",
    checkdate2: "2024-04-22T22:00:00.000Z",
    checkdate3: "2024-06-23T22:00:00.000Z",
  },
  serialNumber: " ",
  serialNumberDate: "2023-12-23T10:48:24.509Z",
};
const Report = () => {
  const { t } = useTranslation();
  const [serialNumber, setSerialNumber] = useState("");

  //const location = useLocation();
  //const { personalData } = location.state || {};
  console.log(personalData, "report data");
  const handleSendData = () => {
    // Add logic to send data to API using serialNumber
    console.log("Sending data...", serialNumber);
  };

  function handlePrint() {
    window.print();
  }

  return (
    <Wrapper>
      <TableContainer component={Paper} elevation={0}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "5px",
            marginRight: "15px",
            "@media print": {
              display: "none", // Hide during print
            },
          }}
        >
          <TextField
            label="Serial Number"
            type="number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            //variant="outlined"
            size="small"
            style={{ marginRight: "10px" }}
          />
          <Button
            style={{ marginRight: "10px" }}
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            onClick={handleSendData}
            size="small"
          >
            Update serial number
          </Button>
          <PrintButton
            variant="contained"
            color="primary"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            size="small"
          >
            Print
          </PrintButton>
        </Box>
        <Box align="center">
          <img src={Logo} width="240" height="84" alt="logoinreport" />
        </Box>
        <StyledMainTitle>
          <Typography>
            <strong>{t("ekovelReport")}: 45678</strong>
          </Typography>
        </StyledMainTitle>

        <Typography variant="body2" align="center" m={2}>
          Date: <strong>{formatDates(personalData?.examinationdate)}</strong>
        </Typography>

        <Table
          size="small"
          sx={{ maxWidth: 450, marginBottom: 1 }}
          align="center"
        >
          <TableBody>
            <TableRow>
              <NoBorderCell align="left">
                <BoldWrapper>Ekovel ID:</BoldWrapper> 54678
              </NoBorderCell>
              <NoBorderCell align="left">
                <BoldWrapper>Phone:</BoldWrapper> 06422334455
              </NoBorderCell>
            </TableRow>
            <TableRow>
              <NoBorderCell align="left">
                <BoldWrapper>Name:</BoldWrapper> Dalibor Kozar
              </NoBorderCell>
              <NoBorderCell align="left">
                <BoldWrapper>Adress:</BoldWrapper> Kej oslobodjenja 67
              </NoBorderCell>
            </TableRow>
            <TableRow>
              <NoBorderCell align="left">
                <BoldWrapper>Date Of Birth:</BoldWrapper> 03/04/1979
              </NoBorderCell>
              <NoBorderCell align="left">
                <BoldWrapper>City:</BoldWrapper> Zemun
              </NoBorderCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={levo11} style={imgStyle} alt="logo" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <StyledMidTitle>
              <MiddleTitle variant="body1">{t('generalExamination')}</MiddleTitle>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ maxWidth: 450, marginBottom: 1 }}
              align="center"
            >
              <TableBody>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>{t('height')} [cm]</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="left">{personalData?.height}</NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>{t('weight')} [kg]</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="left">{personalData?.weight}</NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>{t('optimalWeight')} [kg]</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="left">{calculateBMI(personalData?.height, personalData.gender)}</NoBorderCell>
                </TableRow>
              </TableBody>
            </Table>
            <StyledMidTitle>
              <MiddleTitle>
               {t('feetParametes')}
              </MiddleTitle>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ minWidth: 450, marginBottom: 1 }}
              align="center"
            >
              <TableBody>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>275</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">Foot length L [mm]</NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>276</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>23</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">Foot width W [mm]</NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>23</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>22</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    Medial arch depth X [mm]
                  </NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>22</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>23</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    Medial arch height Y [mm]
                  </NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>23</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>23</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    Bending degree of the tendon
                  </NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>23</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>23</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    Medial arch optimal depth Xo [mm]
                  </NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>23</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>11</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    Medial arch optimal height Yo [mm]
                  </NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>11</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
              </TableBody>
            </Table>
            <StyledMidTitle>
              <Typography>
                <strong>MEDIAL ARCH DISPLACEMENT</strong>
              </Typography>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ maxWidth: 450, marginBottom: 1 }}
              align="center"
            >
              <TableBody>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>24</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    Horizontal displacement FDx [mm]
                  </NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>26</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>10</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    Vertical displacement FDy [mm]
                  </NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>11</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>91</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    Displacement percentage [%]
                  </NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>100</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>IV</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">Displacement level</NoBorderCell>
                  <NoBorderCell align="left">
                    <BoldWrapper>IV</BoldWrapper>
                  </NoBorderCell>
                </TableRow>
              </TableBody>
            </Table>
            <StyledMidTitle>
              <Typography>
                <strong>EKOVEL STEP CORRECT</strong>
              </Typography>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ maxWidth: 450, marginBottom: 1 }}
              align="center"
            >
              <TableBody>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>EU shoe size</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">22</NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>Ekovel Step Correct size</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">24-25</NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>Initial height IY [mm]</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">12</NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>Optimal height OY [mm]</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">15</NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>Adjustment period [weeks]</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    {personalData.therapy.ai}
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="left">
                    <BoldWrapper>Therapy duration [weeks]</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">12</NoBorderCell>
                </TableRow>
              </TableBody>
            </Table>
            <StyledMidTitle>
              <Typography>
                {t("controlExamSchedule")}
              </Typography>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ maxWidth: 450, marginBottom: 1 }}
              align="center"
            >
              <TableBody>
                <TableRow>
                  <NoBorderCell align="right">
                    <BoldWrapper>1.</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    {formatDates(personalData?.therapy?.checkdate1)}
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="right">
                    <BoldWrapper>2.</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    {formatDates(personalData?.therapy?.checkdate2)}
                  </NoBorderCell>
                </TableRow>
                <TableRow>
                  <NoBorderCell align="right">
                    <BoldWrapper>3.</BoldWrapper>
                  </NoBorderCell>
                  <NoBorderCell align="center">
                    {formatDates(personalData?.therapy?.checkdate3)}
                  </NoBorderCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
          <img src={desnop11} style={imgStyle} alt="logo" />
        </Box>
      </TableContainer>
    </Wrapper>
  );
};

export default Report;
