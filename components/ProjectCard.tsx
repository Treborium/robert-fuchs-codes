import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardProps,
  Typography,
} from '@mui/material';

import useRandomHslColor from '../hooks/useRandomColor';

export interface Props extends CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  link,
  sx,
  ...rest
}: Props) {
  return (
    <Card sx={{ ...styles.card, ...sx }} {...rest}>
      <CardActionArea href={link} target='_blank'>
        <CardMedia
          component='img'
          height='140px'
          image={imageSrc}
          alt={title}
          sx={{ backgroundColor: useRandomHslColor() }}
        />
        <CardContent sx={styles.content}>
          <Typography gutterBottom variant='h6' component='div' noWrap>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const styles = {
  card: { minWidth: '20rem', maxWidth: '20rem', maxHeight: 340 },
  content: { minHeight: '8rem', maxHeight: '8rem' },
} as const;
