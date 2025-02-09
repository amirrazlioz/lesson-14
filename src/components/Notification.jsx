import React from 'react'

export default function Notification(props) {
  const styles = {
    success: { backgroundColor: 'lightgreen', padding: '10px', borderRadius: '5px' },
    error: { backgroundColor: 'lightcoral', padding: '10px', borderRadius: '5px' }
  };

  return (
    <div style={props.type === 'success' ? styles.success : styles.error}>
      {props.message}
    </div>
  );
}