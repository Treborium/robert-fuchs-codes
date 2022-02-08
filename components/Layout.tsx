import { Container, createTheme, ThemeProvider } from '@mui/material';

import Navigation from './Navigation';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Navigation />
      <Container disableGutters maxWidth={false} sx={styles.container}>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
    action: {
      hoverOpacity: 0.1,
    },
  },
});

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    padding: 0,
    margin: 0,
  },
} as const;
