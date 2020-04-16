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
const SideBar = (props) => (
  <nav className="side-bar">
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

export default SideBar;
