import React from "react";
import Grid from "@material-ui/core/Grid";
import Game from "./Game";

const games = [
  {
    game: "Call of Duty",
    img: require("../game-imgs/blackops4.jpg")
  },
  {
    game: "Fifa 19",
    img: require("../game-imgs/fifa19.jpg")
  },
  {
    game: "League of Legends",
    img: require("../game-imgs/leagueoflegends.jpg")
  },
  {
    game: "Apex Legends",
    img: require("../game-imgs/apexlegends.jpg")
  },
  {
    game: "Fortnite",
    img: require("../game-imgs/fortnite.jpg")
  },
  {
    game: "Rocket League",
    img: require("../game-imgs/rocketleague.jpg")
  }
];

const GamesGrid = () => {
  return (
    <Grid container direction="row" justify="center" spacing={24}>
      {games.map((gamers, i) => {
        return <Game key={i} game={games[i].game} image={games[i].img} />;
      })}
    </Grid>
  );
};

export default GamesGrid;
