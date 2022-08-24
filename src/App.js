import {StyledContainer} from './components/Styles';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <StyledContainer>
            <Route path="/" element={<Home />} />
          </StyledContainer>
        </Routes>
      </Router>
    </>
  );
}

export default App;
