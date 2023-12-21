import { Component } from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Empire of Osmon",
          viewers: 921,
          favourite: false,
          like: false,
          id: 1,
        },
        { name: "Elite", viewers: 989, favourite: false, like: false, id: 2 },
        {
          name: "Qog'oz bino",
          viewers: 999,
          favourite: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((c) => c.id === id);
      // data.splice(index, 1);  //mutable hodisalar

      const newArr = data.filter((c) => c.id !== id); //immutable

      return {
        data: newArr,
      };
    });
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => {
      data = [...data, newItem];
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return {
        data: newArr,
      };
    });
  };

  onToggleLike = (id) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      });
      return {
        data: newArr,
      };
    });
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.viewers > 800);
      default:
        return arr;
    }
  };

  updateTermHandler = (term) => {
    this.setState({ term: term });
  };

  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const allMoviesCount = data.length;
    const favouriteMoviesCount = data.filter((c) => c.favourite).length;
    const visibleDate = this.filterHandler(
      this.searchHandler(data, term),
      filter
    );

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMoviesCount={favouriteMoviesCount}
          />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter
              filter={filter}
              updateFilterHandler={this.updateFilterHandler}
            />
          </div>
          <MovieList
            onToggleProp={this.onToggleProp}
            data={visibleDate}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
