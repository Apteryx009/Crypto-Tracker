import { Container, makeStyles, Typography } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpeg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant='h2'
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
