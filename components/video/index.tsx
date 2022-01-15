import React from "react";

interface IVideoInfo {
  id: string;
  title: string;
  author: string;
  publishedAt?: string;
  author_url: string;
}

interface Props {
  video: IVideoInfo;
}

const Index = (props: Props) => {
  const { video } = props;
  return (
    <div>
      <div>{video.title}</div>
      <div>{video.publishedAt || "-"}</div>
      <div>
        <a href={`/?videoID=${video.id}`}>Open</a>
      </div>
    </div>
  );
};

export default Index;
