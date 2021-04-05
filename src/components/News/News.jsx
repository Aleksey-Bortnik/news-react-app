import React from "react";
import styles from "./News.module.scss";
import NewsFooter from "./Footer/NewsFooter";

const News = (props) => {
  const { title, description, image, author, category, releaseDate } = props;

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div>
        <img className={styles.img} src={image} alt={title} />
      </div>
      <p>{description}</p>
      <NewsFooter
        author={author}
        category={category}
        releaseDate={releaseDate}
      />
    </div>
  );
};

export default News;
