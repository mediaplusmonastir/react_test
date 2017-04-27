import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date,
  text: 'I hope you enjoy learning react',
  auhor: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function Avatar(props){
  return (
    <img className="Avatar" 
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  )
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props){
  return (
    <div className="Comment" >
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Clock(props){
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick(){
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
setInterval(tick, 1000)

ReactDOM.render(
  //<App />
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.auhor} />,
  document.getElementById('root')
);
