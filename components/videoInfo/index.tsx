import React from "react";

interface IVideoInfo {
  id: string;
  title: string;
  author: string;
  publishedAt?: string;
  author_url: string;
}

interface Props {
  data?: IVideoInfo;
}

const Index = (props: Props) => {
  const { data } = props;

  if (!data) return null;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>Channel : {data.author}</p>
    </div>
  );
};

export default Index;
