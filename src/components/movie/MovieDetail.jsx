import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default ({ detail }) => (
  <>
    <Grid item container spacing={4} alignItems="center" justify="center">
      <Grid item xs={12} sm={6}>
        {detail.Poster !== "N/A" && (
          <img src={detail.Poster} alt="movieposter" />
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" align="left">
          {detail.Rating !== "N/A" && (
            <Typography variant="subtitle1">
              Rating:
              <Rating
                name="half-rating-read"
                defaultValue={detail.imdbRating / 2}
                precision={0.1}
                readOnly
                icon={<FavoriteIcon fontSize="inherit" />}
              />
            </Typography>
          )}
          {detail.Released && detail.Production && detail.Production !== "N/A" && (
            <Typography variant="subtitle1">
              Released on {detail.Released} by {detail.Production}
            </Typography>
          )}
          {detail.Released &&
            (!detail.Production || detail.Production === "N/A") && (
              <Typography variant="subtitle1">
                Released on {detail.Released}
              </Typography>
            )}
          {!detail.Released && detail.Production && (
            <Typography variant="subtitle1">
              Produced by {detail.Production}
            </Typography>
          )}
          {detail.Type && (
            <Typography variant="subtitle1">Type: {detail.Type}</Typography>
          )}
          {detail.Type === "series" && (
            <Typography variant="subtitle1">
              Total seasons: {detail.totalSeasons}
            </Typography>
          )}
          {detail.BoxOffice && detail.BoxOffice !== "N/A" && (
            <Typography variant="subtitle1">
              Box Office: {detail.BoxOffice}
            </Typography>
          )}
          {detail.Director !== "N/A" && (
            <Typography variant="subtitle1">
              Director: {detail.Director}
            </Typography>
          )}
          {detail.Writer !== "N/A" && (
            <Typography variant="subtitle1">
              Writers: {detail.Writer}
            </Typography>
          )}
          {detail.Actors !== "N/A" && (
            <Typography variant="subtitle1">Actors: {detail.Actors}</Typography>
          )}
          {detail.Awards !== "N/A" && (
            <Typography variant="subtitle1">Awards: {detail.Awards}</Typography>
          )}
        </Typography>
      </Grid>
    </Grid>
  </>
);
