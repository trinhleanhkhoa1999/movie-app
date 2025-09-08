import React from "react";

const Loading = () => {
  return (
    <div className="flex h-40 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-slate-200"></div>
    </div>
  );
};

export default Loading;
