import React, { useMemo } from "react";

import useClipboard from "react-use-clipboard";

interface IShareLink {
  url: string;
}

const Index = (props: IShareLink) => {
  const { url } = props;

  const urlText = useMemo(() => {
    return url;
  }, [url]);

  const [isCopied, setCopied] = useClipboard("Text to copy", {
    successDuration: 1000,
  });

  return (
    <div>
      <input value={urlText} type="text" readOnly />
      <button type="button" onClick={setCopied}>
        Share
      </button>

      {isCopied ? "Copie to clipboard" : null}
    </div>
  );
};

export default Index;
