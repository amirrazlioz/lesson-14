import React from 'react';

export default function Card(props) {
  return (
    <div style={styles.container}>
      <div style={styles.title}>{props.titleCard}</div>
      <div style={styles.content}>{props.contentCard}</div>
    </div>
  );
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    direction: 'column',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '10px auto',
  },
  
title : {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '8px',
},

content : {
  fontSize: '16px',
  color: '#333',
},
};
