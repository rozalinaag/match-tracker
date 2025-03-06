import { Match } from "../types/matches";

export const matchesData: {
  matches: Match[]
} = {
  matches: [
    {
      time: "2025-03-01T12:00:00Z",
      title: "Quarter Finals",
      homeTeam: {
        name: "Very big team",
        players: [
          { username: "StrikeMaster", kills: 6 },
          { username: "ShadowFury", kills: 4 }
        ],
        points: 12,
        place: 1,
        total_kills: 10
      },
      awayTeam: {
        name: "Team Storm",
        players: [
          { username: "BlazeKing", kills: 3 },
          { username: "WindRider", kills: 5 }
        ],
        points: 9,
        place: 2,
        total_kills: 8
      },
      homeScore: 4,
      awayScore: 2,
      status: "Finished"
    },
    {
      time: "2025-03-02T14:00:00Z",
      title: "Semi Finals",
      homeTeam: {
        name: "Team Blaze",
        players: [
          { username: "Inferno", kills: 7 },
          { username: "AshWalker", kills: 3 }
        ],
        points: 15,
        place: 1,
        total_kills: 10
      },
      awayTeam: {
        name: "Team Ice",
        players: [
          { username: "FrostBite", kills: 4 },
          { username: "SnowDrift", kills: 4 }
        ],
        points: 11,
        place: 2,
        total_kills: 8
      },
      homeScore: 5,
      awayScore: 3,
      status: "Live"
    },
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
      status: "Live"
    },
    {
      time: "2025-03-04T16:00:00Z",
      title: "Group Stage Match 1",
      homeTeam: {
        name: "Team Omega",
        players: [
          { username: "Titan", kills: 6 },
          { username: "Goliath", kills: 5 }
        ],
        points: 14,
        place: 1,
        total_kills: 11
      },
      awayTeam: {
        name: "Team Nova",
        players: [
          { username: "Nebula", kills: 3 },
          { username: "StarGazer", kills: 4 }
        ],
        points: 9,
        place: 2,
        total_kills: 7
      },
      homeScore: 5,
      awayScore: 3,
      status: "Finished"
    },
    {
      time: "2025-03-05T17:30:00Z",
      title: "Group Stage Match 2",
      homeTeam: {
        name: "Team Phantom",
        players: [
          { username: "GhostStrike", kills: 8 },
          { username: "PhantomAssault", kills: 6 }
        ],
        points: 18,
        place: 1,
        total_kills: 14
      },
      awayTeam: {
        name: "Team Eclipse",
        players: [
          { username: "LunarShadow", kills: 4 },
          { username: "SolarFlare", kills: 5 }
        ],
        points: 10,
        place: 2,
        total_kills: 9
      },
      homeScore: 6,
      awayScore: 4,
      status: "Match preparing"
    },
    {
      time: "2025-03-06T18:45:00Z",
      title: "Round 1",
      homeTeam: {
        name: "Team Vortex",
        players: [
          { username: "Cyclone", kills: 9 },
          { username: "Tempest", kills: 5 }
        ],
        points: 16,
        place: 1,
        total_kills: 14
      },
      awayTeam: {
        name: "Team Blizzard",
        players: [
          { username: "FrostKing", kills: 7 },
          { username: "SnowStorm", kills: 3 }
        ],
        points: 12,
        place: 2,
        total_kills: 10
      },
      homeScore: 4,
      awayScore: 3,
      status: "Finished"
    },
    {
      time: "2025-03-07T19:00:00Z",
      title: "Knockout Stage 1",
      homeTeam: {
        name: "Team Inferno",
        players: [
          { username: "FireStorm", kills: 10 },
          { username: "BlazeWarrior", kills: 8 }
        ],
        points: 20,
        place: 1,
        total_kills: 18
      },
      awayTeam: {
        name: "Team Lightning",
        players: [
          { username: "VoltShock", kills: 6 },
          { username: "ThunderBolt", kills: 4 }
        ],
        points: 14,
        place: 2,
        total_kills: 10
      },
      homeScore: 7,
      awayScore: 5,
      status: "Live"
    },
    {
      time: "2025-03-08T20:15:00Z",
      title: "Final Round",
      homeTeam: {
        name: "Team Legion",
        players: [
          { username: "ShadowReaper", kills: 6 },
          { username: "NightHunter", kills: 4 }
        ],
        points: 15,
        place: 1,
        total_kills: 10
      },
      awayTeam: {
        name: "Team Horizon",
        players: [
          { username: "SkyDancer", kills: 8 },
          { username: "CloudStrike", kills: 3 }
        ],
        points: 12,
        place: 2,
        total_kills: 11
      },
      homeScore: 3,
      awayScore: 4,
      status: "Live"
    },
    {
      time: "2025-03-09T21:30:00Z",
      title: "Preliminary Round",
      homeTeam: {
        name: "Team Apex",
        players: [
          { username: "AlphaKnight", kills: 5 },
          { username: "RogueShadow", kills: 7 }
        ],
        points: 13,
        place: 1,
        total_kills: 12
      },
      awayTeam: {
        name: "Team Dynasty",
        players: [
          { username: "RoyalFury", kills: 6 },
          { username: "EmpireBlade", kills: 4 }
        ],
        points: 10,
        place: 2,
        total_kills: 10
      },
      homeScore: 5,
      awayScore: 3,
      status: "Match preparing"
    },
  ]
}