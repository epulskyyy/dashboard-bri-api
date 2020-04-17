import React, { useState } from 'react';
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
const SideBar = (props) => {
  const [active, setActive] = useState('dashboard');
  return (
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
              <li
                className={
                  active === 'dashboard'
                    ? 'side-bar-link active'
                    : 'side-bar-link'
                }
              >
                <button onClick={() => setActive('dashboard')}>
                  <span>
                    <MdAssignment />
                  </span>
                  Dashboard
                </button>
              </li>
              <li
                className={
                  active === 'feed' ? 'side-bar-link active' : 'side-bar-link'
                }
              >
                <button onClick={() => setActive('feed')}>
                  <span>
                    <MdFlipToFront />
                  </span>
                  Feed
                </button>
              </li>
              <li
                className={
                  active === 'statistics'
                    ? 'side-bar-link active'
                    : 'side-bar-link'
                }
              >
                <button onClick={() => setActive('statistics')}>
                  <span>
                    <MdTimeline />
                  </span>
                  Statistics
                </button>
              </li>
              <li
                className={
                  active === 'teams' ? 'side-bar-link active' : 'side-bar-link'
                }
              >
                <button onClick={() => setActive('teams')}>
                  <span>
                    <MdGroup />
                  </span>
                  Teams
                </button>
              </li>
              <li
                className={
                  active === 'projects'
                    ? 'side-bar-link active'
                    : 'side-bar-link'
                }
              >
                <button onClick={() => setActive('projects')}>
                  <span>
                    <MdWork />
                  </span>
                  Projects
                </button>
              </li>
              <li
                className={
                  active === 'settings'
                    ? 'side-bar-link active'
                    : 'side-bar-link'
                }
              >
                <button onClick={() => setActive('settings')}>
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
};
export default SideBar;
