import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const CurrencySwitch = ({ setUsdChecked }) => {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Switch
            onChange={(e) => setUsdChecked(e.target.checked)}
            color="primary" />}
          label="U$S"
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}

export default CurrencySwitch