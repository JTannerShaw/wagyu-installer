import React, { FC, ReactElement, useState } from 'react';
import { Grid } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';



const ExecutionSelection: FC = (): ReactElement => {
  const [client, setClient] = useState('Geth')


  const handleClientChange = (e: any) => {
    setClient(e.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 350 }}>
      <InputLabel id='eth-execution'>Go Ethereum (Recommended)</InputLabel>
      <Select
        labelId='eth-execution'
        id='execution-select'
        value={client}
        onChange={handleClientChange}
      >
        <MenuItem value={'Geth'}>
          Go Ethereum
        </MenuItem>
        <MenuItem value={'Nethermind'}>Nethermind</MenuItem>
        <MenuItem value={'Open Ethereum'}>Open Ethereum</MenuItem>
        <MenuItem value={'Besu'}>Besu</MenuItem>
      </Select>
    </FormControl>
  )
}


export default ExecutionSelection;
