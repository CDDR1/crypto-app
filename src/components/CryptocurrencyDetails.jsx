import { useParams } from "react-router-dom";
import { useGetCoinsQuery, useGetCoinHistoryQuery, useGetCoinDetailsQuery } from "../slices/coinsSlice";
import { useState } from "react";
import { Typography, Select, Col, Row } from "antd";
import { DollarCircleOutlined, NumberOutlined, ThunderboltOutlined, CloseOutlined, CheckOutlined, TrophyOutlined, LineChartOutlined, MoneyCollectOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import CryptoChart from "./CryptoChart";
import parse from 'html-react-parser';

const { Title } = Typography;
const { Option } = Select;
const { Text } = Typography;

const CryptocurrencyDetails = () => {
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const [chartTime, setChartTime] = useState("7d");
  const { id } = useParams();
  const { data, isFetching: fetchingCoins } = useGetCoinsQuery();
  const { data: history, isFetching: fetchingHistory } = useGetCoinHistoryQuery({ id, chartTime });
  const { data: coinDetails, isFetching: fetchingCoinDetails } = useGetCoinDetailsQuery({ id, chartTime });

  if (fetchingCoins || fetchingHistory || fetchingCoinDetails) return "Loading...";
  console.log(coinDetails);

  const filteredCoin = data.data.coins.filter((coin) => coin.uuid === id);
  const coin = filteredCoin[0];

  const details = coinDetails.data.coin;
  const valueStats = [
    { icon: <DollarCircleOutlined />, title: "Price to USD", value: `$ ${details.price}` },
    { icon: <NumberOutlined />, title: "Rank", value: details.rank },
    { icon: <ThunderboltOutlined />, title: "24h Volume", value: `$ ${details["24hVolume"]}` },
    { icon: <DollarCircleOutlined />, title: "Market Cap", value: `$ ${details.marketCap}` },
    { icon: <TrophyOutlined />, title: "All-time-high (dailyavg.)", value: `$ ${details.allTimeHigh.price}` },
  ];

  const otherStats = [
    { icon: <LineChartOutlined />, title: "Number of Markets", value: details.numberOfMarkets },
    { icon: <MoneyCollectOutlined />, title: "Number of Exchanges", value: details.numberOfExchanges },
    { icon: <ExclamationCircleOutlined />, title: "Approved Supply", value: details.supply.confirmed ? <CheckOutlined /> : <CloseOutlined /> },
    { icon: <ExclamationCircleOutlined />, title: "Total Supply", value: details.supply.total },
    { icon: <ExclamationCircleOutlined />, title: "Circulating Supply", value: details.supply.circulating },
  ];

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
          {time.map((timeperiod, index) => (
            <Option value={timeperiod} key={index}>
              {timeperiod}
            </Option>
          ))}
        </Select>
        <div className="chart-title-stats">
          <Title level={3}>{coin.name} Price Chart</Title>
          <ul className="stats">
            <li className="stat">Change: {history.data.change}%</li>
            <li className="stat">
              Current {coin.name} Price: $ {history.data.history[0].price}
            </li>
          </ul>
        </div>
      </div>
      <CryptoChart history={history.data.history} />
      <Row gutter={32}>
        <Col span={14}>
          <Title level={3}>{coin.name} Value Statistics</Title>
          <p className="coin-statistics-description">An overview showing the statistics of {coin.name}, such as the base and the quote currency, the rank, and trading volume.</p>
          <Row>
            {valueStats.map((stat) => (
              <Col span={24} className="stat-col">
                <div className="stat-name">
                  <span>{stat.icon}</span>
                  <span>{stat.title}</span>
                </div>
                <span className="stat-value">{stat.value}</span>
              </Col>
            ))}
          </Row>
        </Col>

        <Col span={10}>
          <Title level={3}>Other Stats Info</Title>
          <p>An overall look to relevant statistics in the crypto world, involving exhanges and currencies.</p>
          <Row>
            {otherStats.map((stat) => (
              <Col span={24} className="stat-col">
                <div className="stat-name">
                  <span>{stat.icon}</span>
                  <span>{stat.title}</span>
                </div>
                <span className="stat-value">{stat.value}</span>
              </Col>
            ))}
          </Row>
        </Col>

        <Col span={14}>
          <Title level={3}>What is {coin.name}?</Title>
          {parse(details.description)}
        </Col>
      </Row>
    </>
  );
};

export default CryptocurrencyDetails;
