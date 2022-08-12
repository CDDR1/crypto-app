import { Row, Col } from "antd";
import { useGetNewsQuery } from "../slices/newsSlice";
import NewsCard from "./NewsCard";

import { v4 as uuidv4 } from 'uuid';

const News = ({ simplified }) => {
  const { data } = useGetNewsQuery();

  const newsArticles = simplified ? data.value.slice(0, 10) : data.value;
  // console.log(newsArticles)

  return (
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
  );
};

export default News;
