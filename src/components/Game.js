import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { CardActionArea } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import playstation from "../device-icons/playstation.png";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  icon: {
    background: "#474747",
    justifyContent: "centre",
    height: 50
  },
  actions: {
    display: "flex"
  }
};

const Game = ({ game, image, icon }) => {
  return (
    <Grid item xs={6} sm={4} md={3} xl={2}>
      <Card>
        <CardActionArea>
          <CardMedia image={image} title={game} style={styles.media} />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Game;
