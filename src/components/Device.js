const Device = () => {
  return (
    <CardActions className={styles.actions} style={styles.icon}>
      <IconButton aria-label="Playstation">
        <img src={playstation} />
      </IconButton>
    </CardActions>
  );
};

export default Device;
