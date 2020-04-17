import React from 'react';
import './Toolbar.css';
import ToggleButton from '../SideBar/ToggleButton';
import {
  MdNotificationsNone,
  MdChatBubbleOutline,
  MdMoreVert,
} from 'react-icons/md';
import ButtonGreen from '../Button/ButtonGreen';
const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar-nav">
      <div className="toolbar-toggle-button">
        <ToggleButton />
      </div>
      <div className="toolbar-logo">
        <h2>Dashboard</h2>
      </div>
      <div className="spacer" />
      <div className="toolbar-nav-items">
        <ul>
          <li className="toolbar-item">
            <ButtonGreen>Create Project</ButtonGreen>
          </li>
          <li className="toolbar-item-icon">
            <a href="/#" className="notification">
              <MdNotificationsNone />
              <span className="badge" />
            </a>
          </li>
          <li className="toolbar-item-icon">
            <a href="/#">
              <MdChatBubbleOutline />
            </a>
          </li>
          <li>
            <div className="dropdown-item">
              <MdMoreVert />
              <div className="dropdown-content">
                <a href="/#" className="notification">
                  <MdNotificationsNone /> Notificatioon
                  <span className="badge" />
                </a>
                <a href="/#">
                  <MdChatBubbleOutline /> Comments
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="toolbar-item-line" />
          </li>
          <li>
            <div className="toolbar-item-user">
              <div className="toolbar-item-user-img">
                <img
                  className="img-rounded"
                  alt="avatar"
                  src={process.env.PUBLIC_URL + './ava.jpeg'}
                />
              </div>
              <div className="toolbar-item-user-text">
                <h4>Customer Name</h4>
              </div>
              <div className="dropdown-content">
                <a href="/#">Profile</a>
                <a href="/#">Create Project</a>
                <a href="/#">Link 3</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
