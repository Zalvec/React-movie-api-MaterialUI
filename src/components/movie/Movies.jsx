import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../Helpers";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions
} from "@material-ui/core";

export default function Movies({ movies }) {
  return (
    <>
      <Grid container spacing={6}>
        {movies.map(movie => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={
                    movie.Poster !== "N/A" ? "movieposter" : "no movieposter"
                  }
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : process.env.PUBLIC_URL + '/images/No_image_long.png'
                  }
                />
                <CardContent>
                  <Typography variant="h5">
                    {movie.Title} ({movie.Year})
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to={`/movie/${movie.imdbID}/${slugify(movie.Title)}`}
                  className="movieLink"
                >
                  More about this{" "}
                  {movie.Type === "series" ? "serie" : movie.Type}
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
