import React from "react";
import GamesGrid from "../components/GamesGrid";

const styles = {
  div: {
    margin: 20
  }
};

export const Games = () => {
  return (
    <div style={styles.div}>
      <GamesGrid />
    </div>
  );
};
