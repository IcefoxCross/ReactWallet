import React, { useEffect, useState } from 'react'
import {
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import CurrencySwitch from './CurrencySwitch';

const BalanceComponent = () => {
  const [currencySign, setCurrencySign] = useState('$');
  const [usdChecked, setUsdChecked] = useState(false);

  useEffect(() => {
    setCurrencySign(usdChecked ? 'U$S' : '$')
  }, [usdChecked])

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Typography variant="h5" color="initial" data-testid="cashout-title">
            Balance
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" color="initial" data-testid="cashout-title">
            {currencySign}5000
          </Typography>
        </Grid>
        <Grid item>
          <CurrencySwitch setUsdChecked={setUsdChecked} />
          {console.log(usdChecked)}
        </Grid>
      </Grid>
    </Container>
  )
}

export default BalanceComponent
