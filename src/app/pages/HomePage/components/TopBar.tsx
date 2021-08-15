import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SearchInput from './SearchInput';

interface Props {
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movie Gallery
        </Typography>
        <SearchInput onChange={props.onSearchInputChange} />
      </Grid>
    </AppBar>
  );
}
