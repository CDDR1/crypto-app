import { Row, Col, Select, Typography } from "antd";
import { useGetNewsQuery } from "../slices/newsSlice";
import { useGetCoinsQuery } from "../slices/coinsSlice";
import { useState } from "react";
import NewsCard from "./NewsCard";
import { v4 as uuidv4 } from 'uuid';

const { Title } = Typography;


const { Option } = Select;

const News = ({ simplified }) => {
  const { data } = useGetNewsQuery();

  const newsArticles = simplified ? data.value.slice(0, 9) : data.value;

  const { data: coins } = useGetCoinsQuery();

  const [selection, setSelection] = useState("");

  return (
    <>
      {
        !simplified && <Title level={2}>Latest Crypto News</Title>
      }
      {
        !simplified && 
        <Select
          showSearch
          placeholder="Select a cryptocurrency"
          optionFilterProp="children"
          onChange={(value) => setSelection(value)}
          onSearch={(value) => setSelection(value)}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
          style={{marginBottom: "25px", width: "180px"}}
        >
          <Option value="">All</Option>
          {
            coins.data.coins.map(coin => <Option value={coin.name} key={coin.uuid}>{coin.name}</Option>)
          }
        </Select>
      }
      <Row gutter={[32, 32]}>
        {
          newsArticles
          .filter(newsArticle => newsArticle.name.toLowerCase().includes(selection.toLowerCase()))
          .map((newsArticle) =>
            <Col xs={24} xl={12} xxl={8} key={uuidv4()}>
                <a href={newsArticle.url} target="_blank">
                  <NewsCard
                    name={newsArticle.name}
                    image={newsArticle.image?.thumbnail.contentUrl}
                    description={newsArticle.description}
                    providerImg={newsArticle.provider[0].image?.thumbnail.contentUrl}
                    providerName={newsArticle.provider[0].name}
                    datePublished={newsArticle.datePublished}
                  />
                </a>
            </Col>
          )
        }
      </Row>
    </>
  );
};

export default News;
