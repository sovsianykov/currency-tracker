import React, { FunctionComponent, memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { RateItem } from '../../../shared/models/models';
import { theme } from '../../../app/constants/theme';

export interface RowProps {
  currencyRate: RateItem;
}

const useStyles = makeStyles(() => ({
  cell: {
    padding: theme.spacing(0.1, 2),
    background: '#FFF',
    border: '1px solid #ccc',
    color: '#494848',
    fontSize: 18,
    letterSpacing: '0.05rem',
  },
}));

const Row: FunctionComponent<RowProps> = ({ currencyRate }) => {
  const classes = useStyles();
  return (
    <tr>
      <td className={classes.cell}>{currencyRate.currency}</td>
      <td className={classes.cell}>{currencyRate.rate}</td>
    </tr>
  );
};

export default memo(Row);
