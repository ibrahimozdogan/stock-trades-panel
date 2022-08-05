import React, { useEffect, useState } from 'react';
import { SaveTradeForm, TradesTable } from '@containers';
import { Grid, Alert } from '@components';
import { translate } from '@utils';
import { StockApi } from '@api';
import { StockResponse } from '@types';

const { useAlert } = Alert;

function Dashboard() {
  const [trades, setTrades] = useState<StockResponse>([]);
  const alert = useAlert();

  useEffect(() => {
    StockApi.fetchTrades().then(({ data }) => setTrades(data));
  }, []);

  return (
    <Grid
      columns={2}
    >
      <SaveTradeForm onSubmit={async (payload) => {
        try {
          await StockApi.saveTrade(payload);
          alert.show(translate('SUCCESS'));
          StockApi.fetchTrades().then(({ data }) => setTrades(data));
        } catch ({ response }) {
          // @ts-ignore
          alert.show(translate(response?.data.message));
        }
      }}
      />
      <TradesTable trades={trades} />
    </Grid>
  );
}

export default Dashboard;
