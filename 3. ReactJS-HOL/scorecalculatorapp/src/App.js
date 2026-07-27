
import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Jaya Kumari"
        School="C.V. Raman Global University"
        Total={450}
        Goal={5}
      />
    </div>
  );
}

export default App;