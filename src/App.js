import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import CityList from './pages/CityList'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <div className="App">
        
        {/*重定向，但path=localhost:3030时，跳转到home首页*/}
        <Route path='/' exact render={()=><Redirect to='/home' />}/>
        
        <Route path='/home' component={Home}></Route>
        <Route path='/citylist' component={CityList}></Route>
  
      </div>
    </Router>
  );
}

export default App;
