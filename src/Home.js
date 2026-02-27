import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-image">
      <div className="image-wrapper">
        <img src="/images/lolAI.png" alt="ai vs user" />

        <div className="rank-box gold">
          <div className="rank-tier">GOLD</div>
          <div className="rank-point">1,250 P</div>
        </div>

        <div className="rank-box silver">
          <div className="rank-tier">SILVER</div>
          <div className="rank-point">1,250 P</div>
        </div>

      </div>
    </div>
  );
}

export default Home;