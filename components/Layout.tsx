import { Container, Grid } from '@mui/material';

import Navigation from './Navigation';
import { theme } from './Theme';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container disableGutters maxWidth={false} sx={styles.container}>
        {children}
      </Container>
    </>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.backgroundColor,
    fontFamily: theme.fontFamilySerif,
    padding: 0,
    margin: 0,
  }
} as const;
