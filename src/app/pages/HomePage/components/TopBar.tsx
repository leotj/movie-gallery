import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import DateFilter, { Props as DateFilterProps } from './DateFilter';
import SearchInput, { Props as SearchInputProps } from './SearchInput';

interface Props {
  searchInput: SearchInputProps;
  dateFilter: DateFilterProps;
}

export default function TopBar(props: Props) {
  return (
    <AppBar position="static">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        <LocalMoviesIcon />
        <Typography variant="h6" component="div">
          Movie Gallery
        </Typography>
        <Grid item sx={{ flexGrow: 1 }} pl={2} pr={3}>
          <SearchInput {...props.searchInput} />
        </Grid>
        <DateFilter {...props.dateFilter} />
      </Grid>
    </AppBar>
  );
}
