import React from "react";

import Video from "../video";

interface IVideoInfo {
  id: string;
  title: string;
  author: string;
  publishedAt?: string;
  author_url: string;
}

interface Props {
  videos: IVideoInfo[];
}

const Index = (props: Props) => {
  const { videos } = props;

  return (
    <div>
      {videos.map((video) => {
        <Video key={video.id} video={video} />;
      })}
    </div>
  );
};

export default Index;
