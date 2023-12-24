import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <FormControl size="small">
    
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18n.language || 'en'}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="sr_latn">Srpski</MenuItem>
        {/* Add more languages as needed */}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
