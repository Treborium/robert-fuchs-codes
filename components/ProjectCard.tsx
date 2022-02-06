import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardProps,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

import { theme } from './Theme';

export interface Props extends CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  link: string;
  technologies: string[];
}

export default function ProjectCard(props: Props) {
  const { title, description, imageSrc, link, technologies, sx, ...rest } =
    props;

  return (
    <Card sx={sx} {...rest}>
      <CardActionArea href={link} target='_blank' rel='noopener' sx={styles.actionArea}>
        <CardContent sx={styles.content}>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            noWrap
            sx={styles.title}
          >
            {title}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {description}
          </Typography>
        <Grid container spacing={1} alignItems='flex-end' alignContent='flex-end' height='70%'>
          {technologies.map((tech) => (
            <Grid key={`${tech}-${Math.random() * 100}`} item >
              <Chip label={tech} size='small' />
            </Grid>
          ))}
        </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const styles = {
  actionArea: { padding: '1rem' },
  content: {
    width: '42vw',
    minWidth: '42vw',
    height: '25vh',
    minHeight: '25vh',
  },
  title: { fontFamily: theme.fontFamilySans },
} as const;
