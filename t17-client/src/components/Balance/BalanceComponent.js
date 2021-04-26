import React, { useEffect, useState } from 'react'
import {
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import CurrencySwitch from './CurrencySwitch';

const BalanceComponent = () => {
  const [pesosAccountAmount, setPesosAccountAmount] = useState(0)
  const [usdAccountAmount, setUsdAccountAmount] = useState(1)
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
            Balance cuenta {usdChecked ? 'DÓLARES' : 'PESOS'}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" color="initial" data-testid="cashout-title">
            {currencySign}{usdChecked ? usdAccountAmount : pesosAccountAmount}
          </Typography>
        </Grid>
        <Grid item>
          <CurrencySwitch setUsdChecked={setUsdChecked} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BalanceComponent
