import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <FormControl size="small">
    
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="de">German</MenuItem>
        {/* Add more languages as needed */}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
