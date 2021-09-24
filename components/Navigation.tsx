import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";

export default function Navigation() {
  return (
    <Box style={styles.container}>
      <Link href="/home" style={styles.marginPerItem}>home</Link>
      <Typography style={styles.marginPerItem}>|</Typography>
      <Link href="/experience" style={styles.marginPerItem}>experience</Link>
      <Typography style={styles.marginPerItem}>|</Typography>
      <Link href="/projects" style={styles.marginPerItem}>projects</Link>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    
  },
  marginPerItem: {
    margin: '0px 10px'
  }
};