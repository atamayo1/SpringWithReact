import logo from './logo.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <ListEmployeeComponent />
            </Switch>  
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
