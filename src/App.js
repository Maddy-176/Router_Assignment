import logo from './logo.svg';
import './App.css';
import {Routes,Route,useLocation} from "react-router-dom"


import Layout from './components/Layout';
import PostList from './components/PostList';
import UsersList from './components/UsersList';
import NotFound from './components/NotFound';


export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}


function App() {
  const location = useLocation()

  return (
    <div className="App">
     <h1>Routing Assignment</h1>
     {console.log("location",location.pathname)}
     <hr/>
     <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/posts" element={<PostList/>}/>
      <Route path="/users" element={<UsersList/>}/>
      <Route path="*" element={<NotFound/>}/>

     </Routes>    
    
    </div>
  );
}

export default App;
