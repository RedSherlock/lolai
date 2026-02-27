function RankingPage() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>순위표 </h1>

      <table style={{
        width: "100%",
        maxWidth: "800px",
        margin: "30px auto",
        borderCollapse: "collapse"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#79b7d3", color: "white" }}>
            <th style={{ padding: "10px" }}>순위</th>
            <th>소환사명</th>
            <th>티어</th>
            <th>포인트</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>AI Master</td>
            <td>GOLD</td>
            <td>1,850 P</td>
          </tr>
          <tr>
            <td>2</td>
            <td>UserKing</td>
            <td>SILVER</td>
            <td>1,620 P</td>
          </tr>
          <tr>
            <td>3</td>
            <td>ProPlayer</td>
            <td>BRONZE</td>
            <td>1,200 P</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RankingPage;