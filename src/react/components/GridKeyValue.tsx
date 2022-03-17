import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';

type KeyValueProps = {
  keyName: string,
  value: string,
  pass: boolean
}

const GridKeyValue: FC<KeyValueProps> = (props): ReactElement => {
  return (
    <Grid container item direction='row' justifyContent='space-between'>
      <Grid>
        {props.keyName}
      </Grid>
      <Grid style={{color: props.pass === true ? 'green' : 'red'}}>
        {props.value}
      </Grid>
    </Grid>
  )
}

export default GridKeyValue;
