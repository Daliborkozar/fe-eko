import React from "react";
import styled from "styled-components";
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
} from "@mui/material";
import levo11 from "../assets/levop11.png";
import desnop11 from "../assets/desnop11.png";
import PrintIcon from "@mui/icons-material/Print";

const imgStyle = {
  width: "200px",
  height: "500px", // Ensures original aspect ratio
  marginRight: "20px", // Adjust this margin as needed
};

const data = {
  firstName: "Dalibor",
  lastName: "Kozar",
  id: "12345678",
  gender: "male",
  birthdate: "2023-11-15T23:00:00.000Z",
  height: "182",
  weight: "67",
  shoeSize: "43",
  handPreference: "right",
  examinationdate: "2023-11-11T15:22:26.108Z",
  footLengthLeft: "145",
  footWidthLeft: "232",
  mlaDepthLeft: "2",
  tendonPositionLeft: "2",
  legAlignmentLeft: "valgus",
  footLengthRight: "234",
  footWidthRight: "33",
  mlaDepthRight: "33",
  tendonPositionRight: "22",
  legAlignmentRight: "varus",
  legLengthDifference: "1",
  selectedLeg: "",
  leftFootprintSplit: false,
  rightFootprintSplit: true,
};

const Wrapper = styled.div`
  background: none;
  padding: 10px 20px 20px 10px;
  margin: 0px;
`;

const NoBorderCell = styled(TableCell)`
  &&&.MuiTableCell-root {
    border: none;
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

const Report = () => {

    function handlePrint() {
        window.print();
      }
      
  return (
    <Wrapper>
      <TableContainer component={Paper} elevation={0}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" , marginRight: '15px','@media print': {
        display: 'none', // Hide during print
      }}}>
          <PrintButton variant="contained" color="primary" startIcon={<PrintIcon />} onClick={handlePrint}>
            Stampaj
          </PrintButton>
        </Box>
        <Box align="center">
          <img
            src="http://www.algodesk.com/ekosoft/images/print_exam/company-branch-logo.png"
            width="240"
            height="84"
            alt="logo"
          />
        </Box>
        <StyledMainTitle>
          <Typography>
            <strong>EKOVEL REPORT 45678</strong>
          </Typography>
        </StyledMainTitle>

        <Typography variant="body2" align="center" m={2}>
          Date: <strong>5/31/2021</strong>
        </Typography>

        <Table size="small" sx={{ maxWidth: 650 }} align="center">
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
            <NoBorderCell align="leftr">
              <BoldWrapper>City:</BoldWrapper> Zemun
            </NoBorderCell>
          </TableRow>
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
              <Typography variant="body2">
                <strong>GENERAL EXAM</strong>
              </Typography>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ minWidth: 650, marginBottom: 2 }}
              align="center"
            >
              <TableRow>
                <NoBorderCell align="left">
                  <BoldWrapper>Height [cm]</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="left">180</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell align="left">
                  <BoldWrapper>Weight [kg]</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="left">76</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell align="left">
                  <BoldWrapper>Optimal weight [kg]</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="leftr">78</NoBorderCell>
              </TableRow>
            </Table>
            <StyledMidTitle>
              <Typography>
                <strong>FEET PARAMETERS</strong>
              </Typography>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ minWidth: 650, marginBottom: 2 }}
              align="center"
            >
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
                <NoBorderCell align="center">Foot width W [mm]</NoBorderCell>
                <NoBorderCell align="left">
                  <BoldWrapper>23</BoldWrapper>
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
                  <BoldWrapper>23</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="center">Foot width W [mm]</NoBorderCell>
                <NoBorderCell align="left">
                  <BoldWrapper>23</BoldWrapper>
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
            </Table>
            <StyledMidTitle>
              <Typography>
                <strong>MEDIAL ARCH DISPLACEMENT</strong>
              </Typography>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ minWidth: 650, marginBottom: 2 }}
              align="center"
            >
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
                <NoBorderCell align="center">Foot width W [mm]</NoBorderCell>
                <NoBorderCell align="left">
                  <BoldWrapper>23</BoldWrapper>
                </NoBorderCell>
              </TableRow>
            </Table>
            <StyledMidTitle>
              <Typography>
                <strong>EKOVEL STEP CORRECT</strong>
              </Typography>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ minWidth: 650, marginBottom: 2 }}
              align="center"
            >
              <TableRow>
                <NoBorderCell align="left">
                  <BoldWrapper>EU shoe size</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="left">43</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell align="left">
                  <BoldWrapper>Weight [kg]</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="left">76</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell align="left">
                  <BoldWrapper>Optimal weight [kg]</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="leftr">78</NoBorderCell>
              </TableRow>
            </Table>
          </Box>
          <img src={desnop11} style={imgStyle} alt="logo" />
        </Box>
        {/* Other tables and their content using Material-UI components */}
      </TableContainer>
    </Wrapper>
  );
};

export default Report;
