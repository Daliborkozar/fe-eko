import React from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  Select,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "styled-components";
import { addMonthsAndAdjustWeekend } from "../../utils/addMonths";
import {
  velicinaUloskaData,
  findRange,
} from "../../utils/velicinaUlozka";

const TableContainer = styled.div`
  width: 60%;
  margin: 20px 0;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #90ee90;
  color: white;
  padding: 5px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 5px;
  border: 1px solid #ddd;
`;

const StyledHeader = styled(Typography)`
  margin-bottom: 15px;
`;

const LegDiffContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
`;

const TerapyChangeContainer = styled.div`
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const LegDiffLabel = styled(FormLabel)`
  margin-right: 20px;
  margin-left: 10px;
  width: max-content;
`;

const TherapyForm = ({ control, personalData }) => {
  console.log(personalData, "inside Therapy form");
  // const onlyNumbers = (value) => {
  //   const regex = /^\d+(\.\d+)?$/;
  //   return regex.test(value);
  // };
  const { t } = useTranslation()

  console.log(personalData)
  const checkDateTable1 =
    addMonthsAndAdjustWeekend(2).toLocaleDateString("en-GB");
  const checkDateTable2 =
    addMonthsAndAdjustWeekend(4).toLocaleDateString("en-GB");

  const checkDateTable3 =
    addMonthsAndAdjustWeekend(6).toLocaleDateString("en-GB");

  const ulozakData = findRange(personalData.footLengthLeft, personalData.footLengthRight);
  const defaultRange = ulozakData?.range;
  console.log(ulozakData, 'ulozakdata')
  return (
    <>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>{t('parameter')}</TableHeader>
              <TableHeader>{t('value')}</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>{t('ekovelStepCorrectsize')}</TableCell>
              <TableCell>{defaultRange}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('initialHeight')} IY (mm)</TableCell>
              <TableCell>{ulozakData?.initialHeight}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('optimalHeight')} OY (mm)</TableCell>
              <TableCell>{ulozakData?.finalHeight}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('adjustmentInterval')} AI</TableCell>
              <TableCell>1 {t('week')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('firstCheck')}</TableCell>
              <TableCell>{checkDateTable1}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('secondCheck')}</TableCell>
              <TableCell>{checkDateTable2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('thirdCheck')}</TableCell>
              <TableCell>{checkDateTable3}</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </TableContainer>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <StyledHeader variant="h6">{t('therapy')}</StyledHeader>
          <LegDiffContainer>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TerapyChangeContainer>
                  <LegDiffLabel>{t('escSize')}*:</LegDiffLabel>
                  <Controller
                    name="therapy.escSize"
                    control={control}
                    defaultValue={defaultRange}
                    render={({ field }) => (
                      <FormControl>
                        <LegDiffContainer>
                          <Select
                            {...field}
                            style={{ marginRight: "10px", width: "200px" }}
                            value={field.value || defaultRange} // Set the value based on field value or defaultRange
                            renderValue={(selected) =>
                              selected === "" ? "Select size range" : selected
                            }
                          >
                            {velicinaUloskaData.map((item) => (
                              <MenuItem
                                key={item.range}
                                value={item.range}
                                style={{ textAlign: "right" }}
                              >
                                {item.range}
                              </MenuItem>
                            ))}
                          </Select>
                        </LegDiffContainer>
                      </FormControl>
                    )}
                  />
                  <Controller
                    name="therapy.sport"
                    control={control}
                    defaultValue={false} // Set the default value as appropriate
                    render={({ field }) => (
                      <FormControlLabel
                        control={<Checkbox {...field} />}
                        label="Sport"
                      />
                    )}
                  />
                </TerapyChangeContainer>
              </Grid>
              <Grid item xs={12}>
                <TerapyChangeContainer>
                  <Controller
                    name="therapy.iy"
                    control={control}
                    defaultValue={ulozakData?.initialHeight}
                    render={({ field }) => (
                      <FormControl>
                        <TextField
                          type="number"
                          style={{ marginRight: "10px", width: "100px" }}
                          label="IY(mm)*"
                          fullWidth
                          {...field}
                        />
                      </FormControl>
                    )}
                  />

                  <Controller
                    name="therapy.oy"
                    control={control}
                    defaultValue={ulozakData?.finalHeight}
                    render={({ field }) => (
                      <FormControl>
                        <TextField
                          type="number"
                          style={{ marginRight: "10px", width: "100px" }}
                          label="OY(mm)*"
                          fullWidth
                          {...field}
                        />
                      </FormControl>
                    )}
                  />

                  <Controller
                    name="therapy.ai"
                    control={control}
                    defaultValue={1}
                    render={({ field }) => (
                      <FormControl>
                        <TextField
                          type="number"
                          style={{ marginRight: "10px", width: "100px" }}
                          label="AI(mm)*"
                          fullWidth
                          {...field}
                        />
                      </FormControl>
                    )}
                  />
                </TerapyChangeContainer>
              </Grid>
              <Grid item xs={12}>
                <TerapyChangeContainer>
                  <LegDiffLabel>{t('serialNumber')}:</LegDiffLabel>

                  <Controller
                    name="serialNumber"
                    control={control}
                    defaultValue=" "
                    render={({ field }) => (
                      <FormControl>
                        <TextField
                          type="number"
                          style={{ marginRight: "10px", width: "200px" }}
                          label={t('serialNumber')}
                          fullWidth
                          {...field}
                        />
                      </FormControl>
                    )}
                  />
                  <Controller
                    name="serialNumberDate"
                    defaultValue={new Date()}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        label={t('serialNumberDate')}
                        value={field.value}
                        format="dd/MM/yy"
                        onChange={(date) => field.onChange(date)}
                        renderInput={(params) => <TextField {...params} />}
                        style={{ marginBottom: "10px" }}
                      />
                    )}
                  />
                </TerapyChangeContainer>
              </Grid>
            </Grid>
          </LegDiffContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledHeader variant="h6">{t('checkExaminationSchedule')}</StyledHeader>
          <div style={{ marginBottom: "10px" }}>
            <Controller
              name="therapy.checkdate1"
              defaultValue={addMonthsAndAdjustWeekend(2)}
              control={control}
              render={({ field }) => (
                <DatePicker
                  label={t('firstCheck')}
                  value={field.value}
                  format="dd/MM/yy"
                  onChange={(date) => field.onChange(date)}
                  renderInput={(params) => <TextField {...params} />}
                  style={{ marginBottom: "10px" }}
                />
              )}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Controller
              name="therapy.checkdate2"
              defaultValue={addMonthsAndAdjustWeekend(4)}
              control={control}
              render={({ field }) => (
                <DatePicker
                  label={t('secondCheck')}
                  value={field.value}
                  format="dd/MM/yy"
                  onChange={(date) => field.onChange(date)}
                  renderInput={(params) => <TextField {...params} />}
                  style={{ marginBottom: "10px" }}
                />
              )}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Controller
              name="therapy.checkdate3"
              defaultValue={addMonthsAndAdjustWeekend(6)}
              control={control}
              render={({ field }) => (
                <DatePicker
                  label={t('thirdCheck')}
                  value={field.value}
                  format="dd/MM/yy"
                  onChange={(date) => field.onChange(date)}
                  renderInput={(params) => <TextField {...params} />}
                  style={{ marginBottom: "10px" }}
                />
              )}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TherapyForm;
