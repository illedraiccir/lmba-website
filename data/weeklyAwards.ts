export type WeeklyAward = {
  awardId: string;
  seasonId: string;
  week: number;
  awardName: string;

  recipientName: string;

  playerId?: string;
  seasonTeamId?: string;

  title: string;
  body: string;
};

export const weeklyAwards: WeeklyAward[] = [
  {
    "awardId": "2026-w1-player-of-the-week",
    "seasonId": "2026",
    "week": 1,
    "awardName": "Player of the Week",
    "recipientName": "Guy Johnson",
    "playerId": "guy-johnson",
    "seasonTeamId": "2026-ball-starz",
    "title": "Still That Guy",
    "body": "The reigning MVP opened 2026 right where he left off, dropping 23 points to lead Ball Starz past LMBA Jam in an opening-night championship rematch."
  },
  {
    "awardId": "2026-w1-heat-check-award",
    "seasonId": "2026",
    "week": 1,
    "awardName": "Heat Check Award",
    "recipientName": "Doug Adams",
    "playerId": "doug-adams",
    "seasonTeamId": "2026-thrillers",
    "title": "Second-Half Flamethrower",
    "body": "Doug Adams caught fire in the second half, pouring in 23 points to lead Thrillers back from a halftime deficit against Department of Offense on opening night."
  },
  {
    "awardId": "2026-w2-player-of-the-week",
    "seasonId": "2026",
    "week": 2,
    "awardName": "Player of the Week",
    "recipientName": "Doug Adams",
    "playerId": "doug-adams",
    "seasonTeamId": "2026-thrillers",
    "title": "Captain Comeback",
    "body": "Doug Adams delivered another huge performance for Thrillers in Week 2, pouring in 20 points with 12 coming in the second half to fuel yet another comeback victory — this time against powerhouse Ball Starz."
  },
  {
    "awardId": "2026-w2-logo-lillard-buzzer-beater-award",
    "seasonId": "2026",
    "week": 2,
    "awardName": "Logo Lillard Buzzer-Beater Award",
    "recipientName": "Nkenna Opara",
    "playerId": "nkenna-opara",
    "seasonTeamId": "2026-free-agent-team",
    "title": "Dame Time In Moorestown",
    "body": "With the clock winding down, NKenna Opara drilled a cold-blooded long-range step-back three at the buzzer to lift the Free Agent Team over Thrillers in one of the season’s earliest jaw-dropping moments."
  },
  {
    "awardId": "2026-w2-built-different-award",
    "seasonId": "2026",
    "week": 2,
    "awardName": "Built Different Award",
    "recipientName": "LMBA Jam",
    "seasonTeamId": "2026-lmba-jam",
    "title": "70-Piece Combo Meal",
    "body": "LMBA Jam dropped 70 points on the Free Agent Team in one of the league’s first true offensive explosions of the season."
  },
  {
    "awardId": "2026-w2-x-factor-award",
    "seasonId": "2026",
    "week": 2,
    "awardName": "X-Factor Award",
    "recipientName": "Grant Clark",
    "playerId": "grant-clark",
    "seasonTeamId": "2026-department-of-offense",
    "title": "Glue Guy Energy",
    "body": "Grant Clark delivered one of the most complete performances of Week 2 in Department of Offense’s win over Trust The Process, knocking down timely shots, spacing the floor, and providing steady two-way play finishing with 19 points in an early statement team victory."
  },
  {
    "awardId": "2026-w3-player-of-the-week",
    "seasonId": "2026",
    "week": 3,
    "awardName": "Player of the Week",
    "recipientName": "Anthony Shelepets",
    "playerId": "anthony-shelepets",
    "seasonTeamId": "2026-lmba-jam",
    "title": "Certified Bucket",
    "body": "Anthony Shelepets dominated Week 3 for LMBA Jam, highlighted by a week-high 26-point performance against Thrillers after already scoring 19 in a win earlier in the week versus Department of Offense."
  },
  {
    "awardId": "2026-w3-sharpshooter-award",
    "seasonId": "2026",
    "week": 3,
    "awardName": "Sharpshooter Award",
    "recipientName": "Keshon Coleman",
    "playerId": "keshon-coleman",
    "seasonTeamId": "2026-hash-slinging-slashers",
    "title": "Microwave Minutes",
    "body": "Keshon Coleman turned into a flamethrower against Prestige Worldwide, knocking down six triples and finishing with 18 points for the Slashers."
  },
  {
    "awardId": "2026-w3-every-dawg-has-his-day-award",
    "seasonId": "2026",
    "week": 3,
    "awardName": "Every Dawg Has His Day Award",
    "recipientName": "Hakim Jackson",
    "playerId": "hakim-jackson",
    "seasonTeamId": "2026-trust-the-process",
    "title": "Career Night Energy",
    "body": "Often overlooked behind the likes of Wilcox, Sweeney, and Tierney, Hakim Jackson is known more for doing the dirty work and embracing his role. In Week 3, though, he exploded for 17 points to help lead Trust The Process past Prestige Worldwide."
  },
  {
    "awardId": "2026-w3-macgyver-award",
    "seasonId": "2026",
    "week": 3,
    "awardName": "MacGyver Award",
    "recipientName": "Week 3 Scorekeepers",
    "title": "Loose Leaf Legends",
    "body": "When the official scorebook disappeared before tip-off on 4/22, the Week 3 scorekeepers somehow kept the entire league running using notebook paper, tally marks, and pure LM determination and ingenuity."
  },
  {
    "awardId": "2026-w4-player-of-the-week",
    "seasonId": "2026",
    "week": 4,
    "awardName": "Player of the Week",
    "recipientName": "Dave Homsher",
    "playerId": "dave-homsher",
    "seasonTeamId": "2026-lmba-jam",
    "title": "Vintage MVP",
    "body": "Former MVP Dave Homsher delivered the biggest performance of Week 4, exploding for 29 points and seven three-pointers in LMBA Jam’s win over Prestige Worldwide."
  },
  {
    "awardId": "2026-w4-trey-murphy-iii-most-3pm-in-a-loss-award",
    "seasonId": "2026",
    "week": 4,
    "awardName": "Trey Murphy III Most-3PM-in-a-Loss Award",
    "recipientName": "Kevin Carroll",
    "playerId": "kevin-carroll",
    "seasonTeamId": "2026-prestige-worldwide",
    "title": "One-Man Flamethrower",
    "body": "Kevin Carroll could not miss against LMBA Jam, pouring in 25 points and draining seven triples in one of the league’s hottest shooting performances of the season. However, it wasn't enough for his squad to pull off the upset versus LMBA Jam."
  },
  {
    "awardId": "2026-w4-somebody-guard-him-award",
    "seasonId": "2026",
    "week": 4,
    "awardName": "Somebody Guard Him Award",
    "recipientName": "Ben Golden",
    "playerId": "ben-golden",
    "seasonTeamId": "2026-hash-slinging-slashers",
    "title": "Refused To Let Them Die",
    "body": "Ben Golden put together one of the grittiest performances of the season in Week 4, scoring 26 points — including 14 in the second half — to help Hash-Slinging Slashers storm back and force overtime against Trust The Process before ultimately falling short."
  },
  {
    "awardId": "2026-w4-dawg-award",
    "seasonId": "2026",
    "week": 4,
    "awardName": "Dawg Award",
    "recipientName": "Jordan Wilcox",
    "playerId": "jordan-wilcox",
    "seasonTeamId": "2026-trust-the-process",
    "title": "Relentless Bucket Getter",
    "body": "Jordan Wilcox stayed red hot in Week 4, averaging 22 points across two wins and continuing to anchor the Trust The Process offense."
  },
  {
    "awardId": "2026-w5-player-of-the-week",
    "seasonId": "2026",
    "week": 5,
    "awardName": "Player of the Week",
    "recipientName": "Guy Johnson",
    "playerId": "guy-johnson",
    "seasonTeamId": "2026-ball-starz",
    "title": "Automatic From Deep",
    "body": "Guy Johnson continued his MVP-caliber season in Week 5, scoring 42 total points across two Ball Starz wins while knocking down 12 three-pointers, including an eight-triple barrage against the Free Agent Team."
  },
  {
    "awardId": "2026-w5-i-circled-this-game-in-march-award",
    "seasonId": "2026",
    "week": 5,
    "awardName": "\"I Circled This Game In March\" Award",
    "recipientName": "Kyle Kelly",
    "playerId": "kyle-kelly",
    "seasonTeamId": "2026-department-of-offense",
    "title": "Some Things Are Personal",
    "body": "Facing his former team, Kyle Kelly delivered a statement performance for Department of Offense, scoring 23 points and knocking down five three-pointers against Thrillers in one of Week 5’s biggest revenge games."
  },
  {
    "awardId": "2026-w5-open-gym-shootaround",
    "seasonId": "2026",
    "week": 5,
    "awardName": "Open Gym Shootaround",
    "recipientName": "Ball Starz",
    "seasonTeamId": "2026-ball-starz",
    "title": "Wednesday Night LA Fitness Run",
    "body": "Ball Starz turned their Week 5 matchup against the Free Agent Team into a full-on open gym shooting session, raining in 22 three-pointers and pushing the pace all night in a 90-point offensive explosion."
  },
  {
    "awardId": "2026-w5-dawg-award",
    "seasonId": "2026",
    "week": 5,
    "awardName": "Dawg Award",
    "recipientName": "Scott Brusseler",
    "playerId": "scott-brusseler",
    "seasonTeamId": "2026-lmba-jam",
    "title": "Downhill All Night",
    "body": "Scott Brusseler relentlessly attacked the rim in LMBA Jam’s win over Trust The Process, finishing with 18 points while going 8-for-10 from the free throw line."
  },
  {
    "awardId": "2026-w5-waka-flaka-hard-in-the-paint-award",
    "seasonId": "2026",
    "week": 5,
    "awardName": "Waka Flaka Hard In The Paint Award",
    "recipientName": "Anthony Shelepets",
    "playerId": "anthony-shelepets",
    "seasonTeamId": "2026-lmba-jam",
    "title": "No Threes Needed",
    "body": "In an era dominated by three-pointers, Anthony Shelepets casually dropped 20 points against Trust The Process without attempting a single triple."
  },
  {
    "awardId": "2026-w6-big-baller-award",
    "seasonId": "2026",
    "week": 6,
    "awardName": "Big Baller Award",
    "recipientName": "Guy Johnson",
    "playerId": "guy-johnson",
    "seasonTeamId": "2026-ball-starz",
    "title": "New Whip. Same Big Shots.",
    "body": "Guy Johnson missed Ball Starz’s Tuesday matchup against Prestige Worldwide after reportedly getting stuck at the dealership spending his MVP bonus money. He showed up Thursday in the new whip and immediately reminded the league who he is, burying a cold-blooded game-tying three with 13 seconds left to help fuel Ball Starz’s miraculous comeback win over Trust The Process."
  },
  {
    "awardId": "2026-w6-larry-wright-win-it-at-the-line-award",
    "seasonId": "2026",
    "week": 6,
    "awardName": "Larry Wright Win-It-at-the-Line Award",
    "recipientName": "Ryan Fontanazza",
    "playerId": "ryan-fontanazza",
    "seasonTeamId": "2026-ball-starz",
    "title": "No Fear Free Throws",
    "body": "Ryan Fontanazza stepped to the line with the game on the line and calmly knocked down the winning free throws with 3.5 seconds remaining to cap Ball Starz’s miracle comeback against Trust The Process."
  },
  {
    "awardId": "2026-w6-sharpshooter-award",
    "seasonId": "2026",
    "week": 6,
    "awardName": "Sharpshooter Award",
    "recipientName": "Chris Clemente",
    "playerId": "chris-clemente",
    "seasonTeamId": "2026-lmba-jam",
    "title": "Second-Half Flamethrower",
    "body": "Chris Clemente caught fire in the second half against Hash-Slinging Slashers, drilling four clutch three-pointers after halftime to help LMBA Jam pull away in a huge Week 6 victory."
  },
  {
    "awardId": "2026-w6-no-supporting-cast-award",
    "seasonId": "2026",
    "week": 6,
    "awardName": "No Supporting Cast Award",
    "recipientName": "Doug Adams",
    "playerId": "doug-adams",
    "seasonTeamId": "2026-thrillers",
    "title": "Despite The Loss...",
    "body": "Doug Adams did everything he could to keep Thrillers competitive against Trust The Process, exploding for 27 points and five threes while accounting for over half of the team’s offense in the loss."
  }
];
