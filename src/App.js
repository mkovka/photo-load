import React from "react";
import Base from "./components/base";
import Photos from "./components/photos";
import PhotoItem from "./components/photos/photo";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const PHOTOS_LIMIT = 300;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  baseFetch() {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${PHOTOS_LIMIT}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let resultArr = [];
        data.map((item, i) => {
          const arrItem = item.albumId - 1;
          if (!resultArr[arrItem]) {
            resultArr[arrItem] = { albumId: item.albumId };
          }
          if (!resultArr[arrItem].data) {
            resultArr[arrItem].data = [];
          }
          resultArr[arrItem].data.push(item);
        });
        this.setState({ albums: resultArr });
      });
  }
  componentDidMount() {
    this.baseFetch();
  }
  render() {
    const { albums } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact={true}
              path="/"
              render={props => <Base {...props} albums={albums} />}
            />
            <Route
              exact={true}
              path="/albums/:id"
              render={props => (
                <Photos {...props} data={albums[0] ? albums[props.match.params.id - 1].data : []} />
              )}
            />
            <Route
              exact={true}
              path="/albums/:id/photos/:photoId"
              render={props => (
                <PhotoItem
                  {...props}
                  photo={
                    albums[0] ? albums[props.match.params.id - 1].data[props.match.params.photoId] : {}
                  }
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
