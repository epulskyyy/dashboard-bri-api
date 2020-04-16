import React, { Component } from 'react';
import SideBar from './components/SideBar/SideBar';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import Content from './Layout/Container/Content';
import ActionContext from './Context/ActionContext';
import BackDrop from './components/Backdrop/Backdrop';
class App extends Component {
  state = {
    sideBarOpen: false,
  };
  ToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideBarOpen: false });
    console.log(this.state.sideBarOpen);
  };
  render() {
    return (
      <div className="app">
        <ActionContext.Provider
          value={{
            clickToggle: this.ToggleClickHandler,
            clickBackDrop: this.backDropClickHandler,
            show: this.state.sideBarOpen,
          }}
        >
          <Toolbar />
          <SideBar />
          {this.state.sideBarOpen ? <BackDrop /> : null}
          <Content />
        </ActionContext.Provider>
      </div>
    );
  }
}

export default App;
