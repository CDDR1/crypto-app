import { Row, Col, Select } from "antd";
import { useGetNewsQuery } from "../slices/newsSlice";
import { useGetCoinsQuery } from "../slices/coinsSlice";
import NewsCard from "./NewsCard";

import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

const News = ({ simplified }) => {
  const { data } = useGetNewsQuery();

  const newsArticles = simplified ? data.value.slice(0, 10) : data.value;

  const { data: coins } = useGetCoinsQuery();

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value) => {
    console.log('search:', value);
  };

  return (
    <>
      {
        !simplified && 
        <Select
          showSearch
          placeholder="Select a cryptocurrency"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
          {
            coins.data.coins.map(coin => <Option value={coin.name} key={coin.uuid}>{coin.name}</Option>)
          }
        </Select>
      }
      <Row gutter={[32, 32]}>
        {newsArticles.map((newsArticle) =>
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
        )}
      </Row>
    </>
  );
};

export default News;
