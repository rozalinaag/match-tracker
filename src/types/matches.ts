export type Player = {
  username: string;
  kills: number;
}

export type Team = {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}

export type MatchStatus = "Live" | "Match preparing" | "Finished";

export type Match = {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};

export type ApiResponse = {
  ok: boolean;
  data: {
    matches: Match[]
  }
}