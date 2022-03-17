import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';


const SoftwareChecker: FC = (): ReactElement => {
  return (
    <Grid item xs={6}>
      <Typography variant='h5' style={{ textDecoration: "underline" }}>
        Installed Software
      </Typography>
    </Grid>
  )
}

export default SoftwareChecker;
