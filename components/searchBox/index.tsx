import React, { useCallback } from "react";

import { youtubeGetId } from "../../libs/utils";

const Index = () => {
  const handleFormSubmit = useCallback((event) => {
    event.persist();
    event.preventDefault();

    const form = event.target;
    const videoId = youtubeGetId(form.videoUrl.value);

    window.location.href = `/?videoID=${videoId}`;
  }, []);

  return (
    <div>
      <p>Insert your link video youtube, and then smack the button submit</p>
      <form onSubmit={handleFormSubmit}>
        <input type="text" autoComplete="off" name="videoUrl" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Index;
