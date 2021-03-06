import React, { Component } from 'react';
import SideBar from './Components/SideBar/SideBar';
import Toolbar from './Components/Toolbar/Toolbar';
import './App.css';
import Content from './Layout/Container/Content';
import ActionContext from './Context/ActionContext';
import BackDrop from './Components/Backdrop/Backdrop';
import Login from './Layout/Container/Login';
class App extends Component {
  state = {
    sideBarOpen: false,
    isLogin: true,
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
        {this.state.isLogin ? (
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
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
