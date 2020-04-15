import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, Grid, Paper } from "@material-ui/core";

import Loading from "./Loading";
import MoviePlot from "./MoviePlot";
import MovieDetail from "./MovieDetail";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        loading: false,
        error: false,
        data: {}
      }
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      movie: {
        ...this.state.movie,
        loading: true
      }
    });
    axios
      .get(
        "https://www.omdbapi.com/?plot=full&apikey=2e3b4604&i=" +
          this.props.match.params.id
      )
      .then(results => {
        console.log(results.data);
        this.setState({
          ...this.state,
          movie: {
            ...this.state.movies,
            data: { ...results.data },
            loading: false
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          style={{ margin: "0 auto" }}
        >
          <Grid item>
            <Link to="/movie" className="link">
              Back
            </Link>
          </Grid>
          <Grid item>{this.state.movie.loading && <Loading />}</Grid>
          <Grid item>
            <Paper elevation={6} className="movieInfoPaper">
              {Object.keys(this.state.movie.data).length > 0 && (
                <>
                  <Typography variant="h5" className="title movieTitle">
                    {this.state.movie.data.Title} ({this.state.movie.data.Year})
                  </Typography>
                  <MovieDetail detail={this.state.movie.data} />
                  {this.state.movie.data.Plot && (
                    <MoviePlot plot={this.state.movie.data.Plot} />
                  )}
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}
