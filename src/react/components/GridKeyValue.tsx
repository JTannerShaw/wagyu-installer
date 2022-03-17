import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';

type KeyValueProps = {
  keyName: any,
  value: any
}

const GridKeyValue: FC<KeyValueProps> = (props): ReactElement => {
  return (
    <Grid container item direction='row' justifyContent='space-around'>
      <Grid>
        {props.keyName}
      </Grid>
      <Grid>
        {props.value}
      </Grid>
    </Grid>
  )
}

export default GridKeyValue;
