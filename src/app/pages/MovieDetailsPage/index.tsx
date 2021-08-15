import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { format } from 'date-fns';
import capitalize from 'lodash.capitalize';
import numeral from 'numeral';
import {
  selectImage,
  selectTitle,
  selectLike,
  selectShowTime,
  selectSynopsis,
} from './slice/selectors';
import { useMovieDetailsPageSlice } from './slice';

export function MovieDetailPage() {
  let { id } = useParams<{ id: string }>();

  const { actions } = useMovieDetailsPageSlice();

  const synopsis = useSelector(selectSynopsis);
  const image = useSelector(selectImage);
  const title = useSelector(selectTitle);
  const like = useSelector(selectLike);
  const showTime = useSelector(selectShowTime);

  const titleText = capitalize(title);
  const likeText = numeral(like).format('0.0a');
  const showTimeText = showTime && format(new Date(showTime), 'dd LLLL yyyy');

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadMovieDetails(id));
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" flexDirection="column">
          <img src={image} srcSet={image} alt={title} loading="lazy" />
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography gutterBottom variant="h3" pt={2}>
              {titleText}
            </Typography>
            <Stack spacing={2} direction="row">
              <Chip icon={<ThumbUpIcon />} label={likeText} />
              <Chip icon={<EventIcon />} label={showTimeText} />
            </Stack>
            <Typography pt={2}>{synopsis}</Typography>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
