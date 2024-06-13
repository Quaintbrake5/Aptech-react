/* eslint-disable no-undef */
// import MyPage from './components/MyPage'
// import Footer from './components/Footer'
import Greeting from './components/props/Greeting'
import ListItems from './components/props/ListItems'
import Button from './components/props/Button'

function App() {
  // const [count, setCount] = useState(0)
  const fruits = ['mango', 'lemon', 'orange', 'apple']
  const prices = [300, 400, 370, 200]
  const handleLogin = () => {
    alert('You clicked on Log In')
  }
  const handleRegister = () => {
    alert('You clicked on Register')
  }

  return (
    <>
      {/* <MyPage/>
      <Footer/> */}
      <Greeting name = 'Denzyl' message = 'There"s no place like home'/>
      <Greeting name = 'Tolu'/>
      <ListItems items = {fruits} />
      <h2>Prices</h2>
      <ListItems items = {prices} />

        <br/>

      <Button label = 'Register' onClick= {handleRegister} title='Register here'/>
      <br/>
      <Button label = 'Log In' onClick= {handleLogin} title='Log In Here'/>


    </>
  )
}

export default App
