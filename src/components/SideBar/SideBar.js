import React from 'react';
import './SideBar.css';
import {
  MdAssignment,
  MdFlipToFront,
  MdTimeline,
  MdGroup,
  MdWork,
  MdSettings,
} from 'react-icons/md';
import ActionContext from '../../Context/ActionContext';
const SideBar = (props) => (
  <ActionContext.Consumer>
    {(ev) => {
      let sideBarOpen = 'side-bar';
      if (ev.show) {
        sideBarOpen = 'side-bar-open';
      }
      console.log(ev.show);
      console.log(sideBarOpen);
      return (
        <nav className={sideBarOpen}>
          <div className="side-bar-header">
            <img alt="logo" src={process.env.PUBLIC_URL + 'logo.png'} />
          </div>
          <ul>
            <li className="side-bar-link active">
              <button>
                <span>
                  <MdAssignment />
                </span>
                Dashboard
              </button>
            </li>
            <li className="side-bar-link">
              <button>
                <span>
                  <MdFlipToFront />
                </span>
                Feed
              </button>
            </li>
            <li className="side-bar-link">
              <button>
                <span>
                  <MdTimeline />
                </span>
                Statistics
              </button>
            </li>
            <li className="side-bar-link">
              <button>
                <span>
                  <MdGroup />
                </span>
                Teams
              </button>
            </li>
            <li className="side-bar-link">
              <button>
                <span>
                  <MdWork />
                </span>
                Projects
              </button>
            </li>
            <li className="side-bar-link">
              <button>
                <span>
                  <MdSettings />
                </span>
                Settings
              </button>
            </li>
          </ul>
        </nav>
      );
    }}
  </ActionContext.Consumer>
);

export default SideBar;
