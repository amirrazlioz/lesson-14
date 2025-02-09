import './App.css'
import Greeting from "./components/Greeting"
import Button from "./components/Button"
import Card from "./components/Card"
import Notification from "./components/Notification"
import ProductList from "./components/ProductList"
import UserProfile from "./components/UserProfile"

function App() {

  const products = [
    { name: 'Product 1', price: 20 },
    { name: 'Product 2', price: 40 },
    { name: 'Product 3', price: 10 }
  ];

  const label = "Click Me";

  const userProfile1 = {
    avatarUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    username: 'Avatar'
  };
  
  const userCard1 = {
    title: "This is a title",
	  content: "This is a content"
  }
  
  return (
    <div>
    <Greeting name="Dan" ></Greeting>
    <Greeting name="Ran" ></Greeting>
    <ProductList products={products} ></ProductList>
	  <Button label={label}></Button>
    <UserProfile username={userProfile1.username} avatarUrl={userProfile1.avatarUrl}  ></UserProfile>
	  <Card titleCard ={userCard1.title} contentCard={userCard1.content}></Card>
    <Notification type ={'success'} message={"This is a success message"}></Notification>
    <Notification type ={'fail'} message={"This is a fail message"}></Notification>
    </div>
  )
}

export default App
