import React from "react";
import TournamentView from "../components/TournamentView";

const styles = {
  div: {
    margin: 20
  }
};

export const TournamentsPage = () => {
  return (
    <div style={styles.div}>
      <TournamentView />
    </div>
  );
};
