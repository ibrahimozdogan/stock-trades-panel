import React from 'react';
import { translate } from '@utils';
import styled from 'styled-components';
import { StockPayload } from '@types';
import {
  Button,
  TextInput,
  Grid,
  Cell,
  Picker,
  DatePicker,
  Title,
  Divider,
} from '@components';

const StyledForm = styled.form`
  padding: 10px;
  margin: 10px auto;
`;

const payload: StockPayload = {
  id: '',
  price: 0,
  shares: 0,
  symbol: '',
  type: '',
  user: { id: 0, name: '' },
  timestamp: '',
};

const setToPayload = (key: keyof StockPayload, value: string|number|Record<string, any>) => {
  if (typeof value === 'object') {
    // @ts-ignore
    payload[key] = {
      // @ts-ignore
      ...payload[key],
      ...value,
    };
  } else {
    // @ts-ignore
    payload[key] = value;
  }
};

function SaveTradeForm({ onSubmit }: { onSubmit: (submitPayload: StockPayload)=> void }) {
  return (
    <StyledForm
      onSubmit={async (event) => {
        event.preventDefault();
        onSubmit(payload);
      }}
    >
      <Title text={translate('SAVE_YOUR_TRADE')} size="h1" />
      <Divider />
      <Grid
        columns={2}
        justifyContent="center"
        alignContent="center"
        columnGap="10px"
      >
        <Cell>
          <DatePicker
            onChange={(date) => {
              if (date) {
                setToPayload('timestamp', date.format('YYYY-MM-DD'));
              }
            }}
            label={translate('TIMESTAMP')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(id) => {
              setToPayload('id', Number(id));
            }}
            label={translate('ID')}
            type="number"
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(price) => {
              setToPayload('price', Number(price.replace(',', '.')));
            }}
            label={translate('PRICE')}
            type="number"
            min={130.42}
            max={195.65}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(share) => {
              setToPayload('shares', Number(share));
            }}
            label={translate('SHARES')}
            type="number"
            min={10}
            max={30}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(id) => {
              setToPayload('user', { id: Number(id) });
            }}
            label={translate('USER_ID')}
            type="number"
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(symbol) => {
              setToPayload('symbol', symbol);
            }}
            label={translate('SYMBOL')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(username) => {
              setToPayload('user', { name: username });
            }}
            label={translate('USER_NAME')}
            required
          />
        </Cell>
        <Cell>
          <Picker
            onChange={(type) => {
              setToPayload('type', type);
            }}
            options={[{ value: 'buy', name: translate('BUY') }, { value: 'sell', name: translate('SELL') }]}
            label={translate('TYPE')}
            placeholder={translate('TYPE')}
            required
          />
        </Cell>
        <Cell>
          <Button>{translate('SAVE_TRADE')}</Button>
        </Cell>
      </Grid>
    </StyledForm>
  );
}

export default SaveTradeForm;
