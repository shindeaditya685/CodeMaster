"use client";

import TimeAgo from "react-timeago";

const ReactTimeAgo = ({ createdAt }: { createdAt: string }) => {
  return <TimeAgo date={createdAt} />;
};

export default ReactTimeAgo;
