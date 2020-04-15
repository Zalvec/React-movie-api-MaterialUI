import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import { Typography } from "@material-ui/core";

import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Form from "./components/movie/Form";
import Movies from "./components/movie/Movies";
import Movie from "./components/movie/Movie";
import Loading from "./components/movie/Loading";
import Layout from "./components/Layout";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        loading: false,
        error: false,
        data: []
      }
    };
  }

  getMovies = str => {
    this.setState({
      ...this.state,
      movies: {
        ...this.state.movies,
        loading: true
      }
    });
    axios
      .get( process.env.REACT_APP_ENDPOINT + "&s=" + str)
      .then(results => {
        this.setState({
          ...this.state,
          movies: {
            ...this.state.movies,
            data: [...results.data.Search],
            loading: false
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/movie"
            render={() => (
              <>
                <Typography variant="h4" className="title">
                  Movie Searcher
                </Typography>
                <Form getMovies={this.getMovies} />
                {this.state.movies.loading && <Loading />}
                {this.state.movies.data.length !== 0 && (
                  <Movies movies={this.state.movies.data} />
                )}
              </>
            )}
          />
          <Route path="/movie/:id/:title" component={Movie} />
        </Switch>
      </Layout>
    );
  }
}
