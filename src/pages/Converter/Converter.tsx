import React, { memo, useCallback } from 'react';
import Page from '../../shared/components/Page/Page';
import { useFetchAllRates } from '../../hooks/useFetchAllRates';
import { useAppSelector } from '../../hooks/redux';
import { ratesSelector } from '../../store/selectors/selectors';
import {
  Button,
  FormControl, InputLabel,
  MenuItem, Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { theme } from '../../app/constants/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: 350,
    height: 80,
    padding:theme.spacing(1.2),
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#edece0',
    alignSelf: 'center',
    justifySelf: 'center',
  },
  totalAmount: {
    display: 'flex',
    height: 30,
    padding: theme.spacing(2.6, 0),
  },

  input: {
    width: "auto",
  },
  btn: {
    margin: '10px auto',
    display:"block"
  },
}));

const Converter = () => {
  const classes = useStyles();

  const { currencyData } = useAppSelector(ratesSelector);

  const [amount, setAmount] = React.useState('0');
  const [exchanged, setExchanged] = React.useState(0);
  const [currency, setCurrency] = React.useState('uah');
  const [goal, setGoal] = React.useState('usd');

  useFetchAllRates(currency);

  const handleChange = useCallback((event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  }, []);

  const handleGoalChange = useCallback((event: SelectChangeEvent) => {
    setGoal(event.target.value as string);
  }, []);

  const onExchangeHandler = useCallback(() => {
    const exchangeRate = currencyData.find((c) => c.currency === goal)!.rate;
    setExchanged(+amount * exchangeRate);
  },[amount,currencyData,goal]);

  return (
    <Page pageTitle="Converter">
      <Paper className={classes.root} elevation={8}>
        <TextField
          id="standard"
          label="input amount"
          variant="filled"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={classes.input}
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label2">base</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="currency"
            onChange={handleChange}
          >
            <MenuItem value={'uah'}>uah</MenuItem>
            <MenuItem value={'usd'}>usd</MenuItem>
            <MenuItem value={'eur'}>eur</MenuItem>
            <MenuItem value={'czk'}>czk</MenuItem>
            <MenuItem value={'jpy'}>jpy</MenuItem>
            <MenuItem value={'inr'}>inr</MenuItem>
            <MenuItem value={'rub'}>rub</MenuItem>
            <MenuItem value={'sek'}>sek</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Paper className={classes.root} elevation={8}>
        <Typography className={classes.totalAmount} ml={1.7}>{exchanged}</Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label3">goal</InputLabel>
          <Select
            labelId="demo"
            id="demo"
            value={goal}
            label="goal currency"
            onChange={handleGoalChange}
          >
            <MenuItem value={'uah'}>uah</MenuItem>
            <MenuItem value={'usd'}>usd</MenuItem>
            <MenuItem value={'eur'}>eur</MenuItem>
            <MenuItem value={'czk'}>czk</MenuItem>
            <MenuItem value={'jpy'}>jpy</MenuItem>
            <MenuItem value={'inr'}>inr</MenuItem>
            <MenuItem value={'rub'}>rub</MenuItem>
            <MenuItem value={'sek'}>sek</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Button
        variant="contained"
        className={classes.btn}
        onClick={onExchangeHandler}
      >
        Exchange
      </Button>
    </Page>
  );
};

export default memo(Converter);
