import React, { memo, useCallback, useState } from 'react';
import Row from './Row';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import { theme } from '../../../app/constants/theme';
import { useFetchAllRates } from '../../../hooks/useFetchAllRates';
import { useAppSelector } from '../../../hooks/redux';
import { ratesSelector } from '../../../store/selectors/selectors';

const useStyles = makeStyles(() => ({
  root: {
    width: 290,
    height: '60vh',
    marginTop: 30,
    overflowY: 'scroll',
  },
  cell: {
    padding: theme.spacing(0.5, 2),
    background: '#dcdbdb',
    border: '1px solid #ccc',
    color: '#494848',
    fontSize: 16,
    fontWeight: 300,
  },
}));

const CurrencyTable = () => {
  const [base, setBase] = useState('uah');
  const { isLoading } = useFetchAllRates(base);
  const { currencyData } = useAppSelector(ratesSelector);
  const classes = useStyles();
  useFetchAllRates(base);
  const handleChange = useCallback((event: SelectChangeEvent) => {
    setBase(event.target.value as string);
  }, []);
  return (
    <>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-simple-select-label2">base currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={base}
          label="base currency"
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
      <Box className={classes.root}>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <table >
            <thead>
              <tr>
                <th className={classes.cell}>Currency</th>
                <th className={classes.cell}>Rate</th>
              </tr>
            </thead>
            <tbody>
              {currencyData.map((currencyRate) => (
                <Row currencyRate={currencyRate} key={currencyRate.currency} />
              ))}
            </tbody>
          </table>
        )}
      </Box>
    </>
  );
};

export default memo(CurrencyTable);
