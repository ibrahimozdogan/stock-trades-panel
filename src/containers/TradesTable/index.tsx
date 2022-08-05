import React, { useState } from 'react';
import { translate } from '@utils';
import { StockResponse } from '@types';
import styled from 'styled-components';
import { Divider, TextInput, Title } from '@components';

const StyledContainer = styled.div`
  padding: 10px;
  margin: 10px auto;
`;

const StyledTable = styled.table`
  border: 1px solid black;
  height: 300px;
  overflow-y: scroll;
  display: block;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;

const StyledCell = styled.td`
  font-size: ${(props) => props.theme.fontSizes.text.large};
  padding: 10px;
`;

function TradeTable({ trades }: { trades: StockResponse }) {
  const [keyword, setKeyword] = useState('');

  const filteredTrades = trades.filter(
    (trade) => keyword === '' || trade.user.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <StyledContainer>
      <Title text={translate('SAVE_YOUR_TRADE')} size="h1" />
      <Divider />
      <TextInput label={translate('SEARCH_BY_USER_NAME')} onChange={setKeyword} />
      <StyledTable>
        <thead>
          <th>{translate('ID')}</th>
          <th>{translate('TYPE')}</th>
          <th>{translate('SYMBOL')}</th>
          <th>{translate('SHARE')}</th>
          <th>{translate('PRICE')}</th>
          <th>{translate('TIMESTAMP')}</th>
          <th>{translate('USER_ID')}</th>
          <th>{translate('USER_NAME')}</th>
        </thead>
        <tbody>
          {
              filteredTrades.length === 0
                ? <div>{translate('NO_RESULT')}</div>
                : filteredTrades.map((trade) => (
                  <tr key={trade.id}>
                    <StyledCell>{trade.id}</StyledCell>
                    <StyledCell>{trade.type}</StyledCell>
                    <StyledCell>{trade.symbol}</StyledCell>
                    <StyledCell>{trade.shares}</StyledCell>
                    <StyledCell>{trade.price}</StyledCell>
                    <StyledCell>{trade.timestamp}</StyledCell>
                    <StyledCell>{trade.user.id}</StyledCell>
                    <StyledCell>{trade.user.name}</StyledCell>
                  </tr>
                ))
          }
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
}

export default TradeTable;
