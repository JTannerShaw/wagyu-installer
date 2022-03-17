import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';
import GridKeyValue from './GridKeyValue';
import { osName } from 'react-device-detect'


const SystemChecker: FC = (): ReactElement => {
  return (
    <Grid item xs={6}>
      <Typography variant='h5' style={{ textDecoration: "underline" }}>
        Device
      </Typography>
      <Grid container item direction='column'>
        <GridKeyValue keyName='OS' value={ osName } pass={true} />
        <GridKeyValue keyName='CPU' value='I7' pass={false} />
        <GridKeyValue keyName='GPU' value='AMD R9' pass={true} />
        <GridKeyValue keyName='RAM' value='16 GB' pass={true} />
        <GridKeyValue keyName='Storage' value='1000 GB' pass={true} />
      </Grid>
    </Grid>
  )
}


export default SystemChecker;
