import React from 'react'

export default function UserProfile(props) {
  return (
    <div style={styles.container}>
      <h2 style={styles.username}>{props.username}  </h2>
      <img style={styles.avatar} src={props.avatarUrl} alt="User Avatar"></img>
    </div>
  );
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '10px auto',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  username: {
    fontSize: '18px',
    color: '#333',
  },
};