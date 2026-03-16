import React from "react";

const withEventHighlight = (WrappedComponent) => {
  return ({ event, ...props }) => {
    const highlightStyle = event.featured
      ? { border: "2px solid gold", padding: "10px", borderRadius: "0.5rem" }
      : {};
    return <WrappedComponent event={event} highlightStyle={highlightStyle} {...props} />;
  };
};

export default withEventHighlight;