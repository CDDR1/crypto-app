import { useParams } from "react-router-dom";
import { useGetCoinsQuery, useGetCoinHistoryQuery, useGetCoinDetailsQuery } from "../slices/coinsSlice";
import { useState } from "react";
import { Typography, Select, Col, Row } from "antd";
import { DollarCircleOutlined, NumberOutlined, ThunderboltOutlined, CloseOutlined, CheckOutlined, TrophyOutlined, LineChartOutlined, MoneyCollectOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import CryptoChart from "./CryptoChart";
import parse from "html-react-parser";
import millify from "millify";

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

  const filteredCoin = data.data.coins.filter((coin) => coin.uuid === id);
  const coin = filteredCoin[0];

  const details = coinDetails.data.coin; console.log(details)////////////////
  const valueStats = [
    { icon: <DollarCircleOutlined />, title: "Price to USD", value: `$ ${millify(details.price)}` },
    { icon: <NumberOutlined />, title: "Rank", value: details.rank },
    { icon: <ThunderboltOutlined />, title: "24h Volume", value: `$ ${millify(details["24hVolume"])}` },
    { icon: <DollarCircleOutlined />, title: "Market Cap", value: `$ ${millify(details.marketCap)}` },
    { icon: <TrophyOutlined />, title: "All-time-high (dailyavg.)", value: `$ ${millify(details.allTimeHigh.price)}` },
  ];

  const otherStats = [
    { icon: <LineChartOutlined />, title: "Number of Markets", value: details.numberOfMarkets },
    { icon: <MoneyCollectOutlined />, title: "Number of Exchanges", value: details.numberOfExchanges },
    { icon: <ExclamationCircleOutlined />, title: "Approved Supply", value: details.supply.confirmed ? <CheckOutlined /> : <CloseOutlined /> },
    { icon: <ExclamationCircleOutlined />, title: "Total Supply", value: millify(details.supply.total) },
    { icon: <ExclamationCircleOutlined />, title: "Circulating Supply", value: millify(details.supply.circulating) },
  ];

  return (
    <>
      <div className="details-header">
        <Title level={2} className="title-stats">{`${coin.name} (${coin.symbol}) Price`}</Title>
        <p className="details-text">{`${coin.name} live price in US Dollar (USD). View value statistics, market cap and supply.`}</p>
      </div>
      <hr className="line" />
      <div className="chart-heading">
        <Select
          defaultValue={chartTime}
          style={{
            width: 160,
            marginBottom: 10
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
          <Title level={3} className="title-stats">{coin.name} Price Chart</Title>
          <ul className="stats">
            <li className="stat">Change: {history.data.change}%</li>
            <li className="stat">
              Current {coin.name} Price: $ {millify(history.data.history[0].price)}
            </li>
          </ul>
        </div>
      </div>
      <CryptoChart history={history.data.history} />
      <Row gutter={[48, 48]} className="coin-details">

        <Col xs={24} lg={12} xxl={14}>
          <Title level={3} className="title-stats">{coin.name} Value Statistics</Title>
          <p className="coin-statistics-description details-text">An overview showing the statistics of {coin.name}, such as the base and the quote currency, the rank, and trading volume.</p>
          <Row>
            {valueStats.map((stat, index) => (
              <Col span={24} className="stat-col" key={index}>
                <div className="stat-name details-text">
                  <span>{stat.icon}</span>
                  <span>{stat.title}</span>
                </div>
                <span className="stat-value">{stat.value}</span>
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={24} lg={12} xxl={10}>
          <Title level={3} className="title-stats">Other Stats Info</Title>
          <p className="details-text">An overall look to relevant statistics in the crypto world, involving exhanges and currencies.</p>
          <Row>
            {otherStats.map((stat, index) => (
              <Col span={24} className="stat-col" key={index}>
                <div className="stat-name details-text">
                  <span>{stat.icon}</span>
                  <span>{stat.title}</span>
                </div>
                <span className="stat-value">{stat.value}</span>
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={24} lg={12} xxl={14} className="coin-description">
          <Title level={3} className="title-stats">What is {coin.name}?</Title>
          {parse(details.description)}
        </Col>

        <Col xs={24} lg={12} xxl={10}>
          <Title level={3} className="title-stats">{coin.name} Links</Title>
          <Row>
            {details.links.map((link, index) => (
              <Col span={24} className="stat-col" key={index}>
                <span class="link-type">{link.type}</span>
                <a href={link.url} target="_blank">{link.name}</a>
              </Col>
            ))}
          </Row>
        </Col>

      </Row>
    </>
  );
};

export default CryptocurrencyDetails;
