import React from "react";
import GridList from "@material-ui/core/Grid";
import Game from "./Game";

const games = [
  {
    game: "Call of Duty",
    img: require("../game-imgs/blackops4.jpg"),
    icon: require("../device-icons/playstation.png")
  },
  {
    game: "Fifa 19",
    img: require("../game-imgs/fifa19.jpg"),
    icon: require("../device-icons/playstation.png")
  },
  {
    game: "League of Legends",
    img: require("../game-imgs/leagueoflegends.jpg"),
    icon: require("../device-icons/playstation.png")
  },
  {
    game: "Apex Legends",
    img: require("../game-imgs/apexlegends.jpg"),
    icon: require("../device-icons/playstation.png")
  },
  {
    game: "Fortnite",
    img: require("../game-imgs/fortnite.jpg"),
    icon: require("../device-icons/playstation.png")
  },
  {
    game: "Rocket League",
    img: require("../game-imgs/rocketleague.jpg"),
    icon: require("../device-icons/playstation.png")
  }
];

const GamesGrid = () => {
  return (
    <GridList container direction="row" spacing={24}>
      {games.map((gamers, i) => {
        return (
          <Game
            key={i}
            game={games[i].game}
            image={games[i].img}
            icon={games[i].icon}
          />
        );
      })}
    </GridList>
  );
};

export default GamesGrid;
