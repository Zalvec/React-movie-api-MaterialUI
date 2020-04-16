import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: {
        value: "",
        error: false
      }
    };
  }

  changeHandler = e => {
    this.setState({
      ...this.state,
      searchField: {
        ...this.state.searchField,
        value: e.target.value,
        error: false
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.searchField.value !== "") {
      this.setState({
        ...this.state,
        searchField: {
          ...this.state.searchField,
          error: false
        }
      });
      this.props.getMovies(this.state.searchField.value);
    } else {
      this.setState({
        ...this.state,
        searchField: {
          ...this.state.searchField,
          error: true
        }
      });
    }
  };

  render() {
    return (
      <form
        action=""
        onSubmit={this.submitHandler}
        style={{ marginBottom: "2em" }}
      >
        {!this.state.searchField.error ? (
          <TextField
            placeholder="What is it you search?"
            value={this.state.searchField.value}
            onChange={this.changeHandler}
          />
        ) : (
          <TextField
            error
            helperText="Enter your search criterium"
            value={this.state.searchField.value}
            onChange={this.changeHandler}
          />
        )}

        <Button
          type="submit"
          color="primary"
          variant="contained"
          className="submitButton"
          startIcon={<SearchIcon />}
        >
          Find it!
        </Button>
      </form>
    );
  }
}
