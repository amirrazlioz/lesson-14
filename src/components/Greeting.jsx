import React from 'react'

export default function Greeting (props) {
    console.log(props.name)
	return (
		<h1>Hello, {props.name}!</h1>
	)
}	

/*
export default function Greeting(props) {
    const { user } = props; // Destructuring user from props
    console.log(user);
    
    return <h1>Hello, {user}!</h1>; // Use user instead of name
}	
*/