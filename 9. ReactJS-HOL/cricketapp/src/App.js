import ListOfPlayers from "./ListOfPlayers";
import { OddPlayers, EvenPlayers, IndianPlayers } from "./IndianPlayers";

function App() {

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Rohit", score: 80 },
    { name: "Raina", score: 75 }
  ];

  const playersBelow70 = players.filter(player => player.score < 70);

  const IndianTeam = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Rohit",
    "Yuvaraj",
    "Raina"
  ];

  let flag = false;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>

        <ListOfPlayers players={players} />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>

        <ListOfPlayers players={playersBelow70} />
      </div>
    );
  } else {
    return (
      <div>

        <h1>Indian Team</h1>

        <hr />

        <h1>Odd Players</h1>

        <OddPlayers players={IndianTeam} />

        <hr />

        <h1>Even Players</h1>

   <EvenPlayers players={IndianTeam} />

        <hr />

        <h1>List of Indian Players Merged</h1>

        <ListOfPlayers
          players={IndianPlayers.map((name) => ({
            name,
            score: ""
          }))}
        />

      </div>
    );
  }
}

export default App;