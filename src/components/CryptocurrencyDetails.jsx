import { useParams } from "react-router-dom";
import { useGetCoinsQuery } from "../slices/coinsSlice";
import { useGetCoinHistoryQuery } from "../slices/coinsSlice";
import { useState } from "react";
import { Typography, Select } from "antd";
import CryptoChart from "./CryptoChart";

const { Title } = Typography;
const { Option } = Select;

const CryptocurrencyDetails = () => {
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const [chartTime, setChartTime] = useState("7d");
  const { id } = useParams();
  const { data, isFetching: fetchingCoins } = useGetCoinsQuery();
  const { data: history, isFetching: fetchingHistory } = useGetCoinHistoryQuery({ id, chartTime });

  if (fetchingCoins || fetchingHistory) return "Loading...";

  const filteredCoin = data.data.coins.filter((coin) => coin.uuid === id);
  const coin = filteredCoin[0];

  return (
    <>
      <div className="details-header">
        <Title level={2}>{`${coin.name} (${coin.symbol}) Price`}</Title>
        <p>{`${coin.name} live price in US Dollar (USD). View value statistics, market cap and supply.`}</p>
      </div>
      <hr />
      <div className="chart-heading">
        <Select
          defaultValue={chartTime}
          style={{
            width: 140,
          }}
          onChange={(value) => setChartTime(value)}
        >
          {
            time.map((timeperiod, index) => <Option value={timeperiod} key={index} >{timeperiod}</Option>)
          }
        </Select>
        <div className="chart-title-stats">
          <Title level={3}>{coin.name} Price Chart</Title>
          <ul className="stats">
            <li className="stat">
              Change: {history.data.change}%
            </li>
            <li className="stat">
              Current {coin.name} Price: $ {history.data.history[0].price}
            </li>
          </ul>
        </div>
      </div>
      <CryptoChart history={history.data.history} />
    </>
  );
};

export default CryptocurrencyDetails;
