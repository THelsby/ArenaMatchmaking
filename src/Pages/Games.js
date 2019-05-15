import React from "react";
import GamesGrid from "../components/GamesGrid";

const styles = {
  div: {
    margin: 20
  },
  divFullScreen: {
    height: 100,
    color: "#000000"
  }
};

export const Games = () => {
  return (
    <div style={styles.divFullScreen}>
      <div style={styles.div}>
        <h2>GAMES PAGE</h2>
        <GamesGrid />
      </div>
    </div>
  );
};
