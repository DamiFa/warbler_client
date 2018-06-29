import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({ text, date, user, profileImageUrl, removeMessage, isCorrectUser }) => (
  <div>
    <li className="list-group-item">
      <img 
        className="timeline-image"
        src={profileImageUrl || DefaultProfileImg} 
        alt={user} 
        height="100" 
        width="100"
      />
      <div className="message-area">
        <Link to='/'>@{user} &nbsp;</Link>
        <span className="text-muted">
          <Moment
            className="text-muted"
            format="Do MMM YYYY"
          >
          {date}
          </Moment>
        </span>
        <p>
          {text}
        </p>
        {isCorrectUser && (
          <button className="btn btn-danger" onClick={removeMessage}>
            Delete Message
          </button>
        )}
      </div>
    </li>
  </div>
)

export default MessageItem;