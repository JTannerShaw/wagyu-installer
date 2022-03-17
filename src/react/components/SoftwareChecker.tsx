import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';
import GridKeyValue from './GridKeyValue';

type SoftWareCheckerProps = {
  CURL: boolean,
  Rocketpool: boolean,
  Docker: boolean
}

const SoftwareChecker: FC<SoftWareCheckerProps> = (props): ReactElement => {
  return (
    <Grid item xs={6}>
      <Typography variant='h5' style={{ textDecoration: "underline" }}>
        Installed Software
      </Typography>
      <Grid container item direction='column'>
        <GridKeyValue keyName='CURL' value={props.CURL === true ? 'YES' : 'NO'} pass={props.CURL}/>
        <GridKeyValue keyName='RocketPool' value={props.Rocketpool === true ? 'YES' : 'NO'} pass={props.Rocketpool} />
        <GridKeyValue keyName='Docker' value={props.Docker === true ? 'YES' : 'NO'} pass={props.Docker} />
      </Grid>
    </Grid>
  )
}

export default SoftwareChecker;
