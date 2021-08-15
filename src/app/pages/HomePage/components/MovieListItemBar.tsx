import React from 'react';
import Chip from '@material-ui/core/Chip';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { format } from 'date-fns';
import capitalize from 'lodash.capitalize';
import numeral from 'numeral';
import { Movie } from 'types/movie';
import EventIcon from '@material-ui/icons/Event';

type Props = Movie;

export default function MovieListItemBar(props: Props) {
  const titleText = capitalize(props.title);
  const likeText = numeral(props.like).format('0.0a');
  const showTimeText = format(new Date(props.showTime), 'dd LLLL yyyy');

  return (
    <ImageListItemBar
      title={
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {titleText}
        </Typography>
      }
      actionIcon={
        <Stack direction="row" spacing={2} pr={2}>
          <Chip
            clickable={false}
            icon={<ThumbUpIcon />}
            label={<Typography variant="body2">{likeText}</Typography>}
            sx={{ backgroundColor: 'white' }}
          />
          <Chip
            clickable={false}
            icon={<EventIcon />}
            label={<Typography variant="body2">{showTimeText}</Typography>}
            sx={{ backgroundColor: 'white' }}
          />
        </Stack>
      }
    />
  );
}
