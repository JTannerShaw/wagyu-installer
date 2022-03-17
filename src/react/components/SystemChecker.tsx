import React, {FC, ReactElement} from 'react';
import {Grid, Typography} from '@mui/material';


const SystemChecker: FC = (): ReactElement => {
  return (
    <Grid item xs={6} style={{backgroundColor: 'blue'}}>
          <Typography variant='h5' style={{textDecoration: "underline"}}>
            Device
          </Typography>
          <Grid container item justifyContent='space-around'>
            <Grid>
              OS
            </Grid>
            <Grid>
              Linux
            </Grid>
          </Grid>
        </Grid>
  )
}


export default SystemChecker;
