import React, { FC, ReactElement, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';



const ConsensusSelection: FC = (): ReactElement => {
  const [client, setClient] = useState('Lighthouse')


  const handleClientChange = (e: any) => {
    setClient(e.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 350 }}>
        <Typography variant='h6'>Consensus</Typography>
        <InputLabel id='eth-consensus'>Lighthouse (Recommended)</InputLabel>
        <Select
          labelId='eth-consensus'
          id='consensus-select'
          value={client}
          onChange={handleClientChange}
        >
          <MenuItem value={'Lighthouse'}>Lighthouse</MenuItem>
          <MenuItem value={'Teku'}>Teku</MenuItem>
          <MenuItem value={'Prysm'}>Prysm</MenuItem>
          <MenuItem value={'Nimbus'}>Nimbus</MenuItem>
        </Select>
      </FormControl>
  )
}


export default ConsensusSelection;
