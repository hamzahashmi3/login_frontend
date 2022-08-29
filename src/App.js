import {StyledContainer} from './components/Styles';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        {/* <Routes> */}
          <StyledContainer>
            <Login />
          {/* <Home /> */}
            {/* <Route path="/" element={<Home />} /> */}
          </StyledContainer>
        {/* </Routes> */}
      </Router>
    </>
  );
}

export default App;
