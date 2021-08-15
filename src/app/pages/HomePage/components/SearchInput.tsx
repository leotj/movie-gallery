import React from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { AutocompleteInputChangeReason } from '@material-ui/unstyled/AutocompleteUnstyled/useAutocomplete';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export interface Props {
  options: string[];
  onInputChange?: (
    event: React.SyntheticEvent,
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => void;
}

export default function SearchInput(props) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Autocomplete
        disablePortal
        options={props.options}
        renderInput={params => <TextField {...params} />}
        onInputChange={props.onInputChange}
        sx={{
          '& input': {
            paddingLeft: theme => `calc(1em + ${theme.spacing(4)}) !important`,
            color: 'white',
          },
        }}
      />
    </Search>
  );
}
