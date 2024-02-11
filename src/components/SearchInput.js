import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput({ searchText, handleSearchInputChange }) {
  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      //fullWidth
      //style={{ maxWidth: '300px' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={searchText}
      onChange={handleSearchInputChange}
    />
  );
}

export { SearchInput };
