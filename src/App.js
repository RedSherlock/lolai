import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import RankingPage from './RankingPage';
import Home from './Home';

function App() {
  return(
    <div className='App'>

      <div className ='black-nav'>
        <div className='logo'>lolAI.gg</div>

        <h4>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            홈
          </Link>
        </h4>

        <h4>
          <Link to="/ranking" style={{ textDecoration: "none", color: "inherit" }}>
            순위표
          </Link>
        </h4>

        <h4>AI예측</h4>
        <h4>등급표</h4>
        <h4>게유게시판</h4>
        <h4>로그인</h4>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<RankingPage />} />
      </Routes>

    </div>
  );
}

export default App;