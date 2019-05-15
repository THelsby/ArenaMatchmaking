import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { CardActionArea } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import cod from "../game-imgs/blackops4.jpg";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
};

const Game = ({ game, image }) => {
  return (
    <Grid item xs={6} sm={4} md={3} xl={2}>
      <Card>
        <CardActionArea>
          <CardMedia image={image} title={game} style={styles.media} />
          <CardContent />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Game;
