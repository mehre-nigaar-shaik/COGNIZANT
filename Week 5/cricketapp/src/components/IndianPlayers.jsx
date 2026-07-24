function IndianPlayers() {

  const team = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Pant",
    "Hardik"
  ];

  const [odd1, even1, odd2, even2, odd3, even3] = team;

  const T20players = [
    "Virat",
    "Rohit",
    "Pant"
  ];

  const RanjiPlayers = [
    "Pujara",
    "Rahane",
    "Iyer"
  ];

  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>

      <h2>Odd Team Players</h2>

      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>

      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>Merged Players</h2>

      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

    </div>
  );
}

export default IndianPlayers;