import React, { useState } from "react";
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
  TextField,
} from "@mui/material";
import levo11 from "../assets/levop11.png";
import desnop11 from "../assets/desnop11.png";
import PrintIcon from "@mui/icons-material/Print";
import SendIcon from "@mui/icons-material/Send";
import Logo from "../assets/ekologo.png";

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

const Report = () => {
  const [serialNumber, setSerialNumber] = useState("");

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
            <strong>EKOVEL REPORT 45678</strong>
          </Typography>
        </StyledMainTitle>

        <Typography variant="body2" align="center" m={2}>
          Date: <strong>5/31/2021</strong>
        </Typography>

        <Table
          size="small"
          sx={{ maxWidth: 450, marginBottom: 1 }}
          align="center"
        >
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
              sx={{ maxWidth: 450, marginBottom: 1 }}
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
                <NoBorderCell align="left">78</NoBorderCell>
              </TableRow>
            </Table>
            <StyledMidTitle>
              <Typography>
                <strong>FEET PARAMETERS</strong>
              </Typography>
            </StyledMidTitle>
            <Table
              size="small"
              sx={{ minWidth: 450, marginBottom: 1 }}
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
                <NoBorderCell align="center">1</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell align="left">
                  <BoldWrapper>Therapy duration [weeks]</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="center">12</NoBorderCell>
              </TableRow>
            </Table>
            <StyledMidTitle>
              <Typography>
                <strong>CONTROL EXAM SCHEDULE</strong>
              </Typography>
            </StyledMidTitle>
            <Table>
              <TableRow>
                <NoBorderCell align="right">
                  <BoldWrapper>1.</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="center">12/12/2024</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell align="right">
                  <BoldWrapper>2.</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="center">12/12/2024</NoBorderCell>
              </TableRow>
              <TableRow>
                <NoBorderCell align="right">
                  <BoldWrapper>3.</BoldWrapper>
                </NoBorderCell>
                <NoBorderCell align="center">12/12/2024</NoBorderCell>
              </TableRow>
            </Table>
          </Box>
          <img src={desnop11} style={imgStyle} alt="logo" />
        </Box>
      </TableContainer>
    </Wrapper>
  );
};

export default Report;
