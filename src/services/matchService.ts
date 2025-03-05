const mockApiResponse = {
  ok: true,
  data: {
    matches: [
      {
        time: "2025-03-03T15:30:00Z",
        title: "Championship Finals",
        homeTeam: {
          name: "Team Alpha",
          players: [
            { username: "Player1", kills: 5 },
            { username: "Player2", kills: 3 }
          ],
          points: 10,
          place: 1,
          total_kills: 8
        },
        awayTeam: {
          name: "Team Beta",
          players: [
            { username: "PlayerA", kills: 4 },
            { username: "PlayerB", kills: 2 }
          ],
          points: 7,
          place: 2,
          total_kills: 6
        },
        homeScore: 3,
        awayScore: 2,
        status: "Finished"
      }
    ]
  }
};

function fetchMatches() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockApiResponse), 500);
  });
}

fetchMatches().then(response => console.log(response));
