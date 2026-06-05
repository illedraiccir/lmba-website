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
  },
  {
    awardId: "2026-w6-winning-time-award",
    seasonId: "2026",
    week: 6,
    awardName: "Winning Time Award",
    recipientName: "Brett Ziller",
    playerId: "brett-ziller",
    seasonTeamId: "2026-thrillers",
    title: "Keeping Thrillers Alive",
    body: "With Thrillers fighting to avoid a brutal first-round playoff matchup entering the final week of the regular season, Brett Ziller delivered one of the biggest performances of their season. Ziller poured in 24 points — including 10 in the second half — to lead Thrillers past Hash-Slinging Slashers and improve the team to 3-6. Even more impressive: Ziller has now been part of all three Thrillers victories this season, continuing to prove he’s the engine behind every big Thrillers win.",
  },
  {
    awardId: "2026-w7-player-of-the-week",
    seasonId: "2026",
    week: 7,
    awardName: "Player of the Week",
    recipientName: "Grant Clark",
    playerId: "grant-clark",
    seasonTeamId: "2026-department-of-offense",
    title: "No Days Off",
    body:
      "Grant Clark saved his best basketball for the final week of the regular season. Less than 24 hours before Department of Offense's matchup with Prestige Worldwide, Clark poured in 24 points and six three-pointers in a near-upset of LMBA Jam, a team that may have been guilty of looking ahead to its winner-take-all showdown with Ball Starz for the No. 1 seed. Clark followed it up with 17 more points in a crucial win over Prestige Worldwide, helping Department of Offense avoid a seeding tiebreaker and swing the playoff picture from a potential 6-seed finish to the 4-seed. Across two games, Clark totaled 41 points and nine three-pointers while playing a major role in one of the most impactful stretches of the season.",
  },
  {
    awardId: "2026-w7-lock-the-door-award",
    seasonId: "2026",
    week: 7,
    awardName: "Lock The Door & Throw Away The Key Award",
    recipientName: "Ball Starz",
    seasonTeamId: "2026-ball-starz",
    title: "Nine Points. That's It.",
    body:
      "With the No. 1 seed hanging in the balance, Ball Starz delivered the most dominant half of basketball played all season. After taking a 31-26 lead into halftime, the Ball Starz completely shut down LMBA Jam over the final 20 minutes, allowing just nine second-half points while outscoring them 37-9. What began as a heavyweight battle for first place quickly turned into a statement. The victory secured the regular-season championship, the No. 1 playoff seed, and sent a clear message to the rest of the league: if you want the title, you'll have to go through the Ball Starz.",
  },
  {
    awardId: "2026-w7-youre-coming-with-us-award",
    seasonId: "2026",
    week: 7,
    awardName: "You're Coming With Us Award",
    recipientName: "Prestige Worldwide",
    seasonTeamId: "2026-prestige-worldwide",
    title: "You're Coming With Us",
    body:
      "Entering the final week, Thrillers still had a chance to improve their playoff position. Prestige Worldwide had other ideas. Led by Thomas Hays' 19 points and Kevin Carroll's four three-pointers, Prestige rolled to a 60-45 victory that effectively sealed Thrillers' fate in the standings. Prestige may not have finished exactly where it wanted, but it made sure Thrillers weren't climbing past them on the final week of the regular season.",
  },
  {
    awardId: "2026-w7-sharpshooter-award",
    seasonId: "2026",
    week: 7,
    awardName: "Sharpshooter Award",
    recipientName: "Kyle Kelly",
    playerId: "kyle-kelly",
    seasonTeamId: "2026-department-of-offense",
    title: "Six Pack",
    body:
      "Kyle Kelly saved one of his best shooting performances of the season for the final week. Kelly buried six three-pointers and scored 19 points in Department of Offense's 60-49 victory over Prestige Worldwide, helping DOO secure a crucial victory and climb to the 4-seed. Every time Prestige threatened to make a run, Kelly seemed to have an answer waiting from beyond the arc.",
  },
  {
    awardId: "2026-qf-mvp-award",
    seasonId: "2026",
    week: 8,
    awardName: "Quarterfinals MVP Award",
    recipientName: "Manthan Tailor",
    playerId: "manthan-tailor",
    seasonTeamId: "2026-thrillers",
    title: "First Shot, Last Word",
    body:
      "Manthan Tailor spent the entire night doing the little things for the Thrillers and never attempted a shot. Then, with the defending champions clinging to a two-point lead in overtime, chaos struck. A late turnover gave Thrillers one final possession, and Tailor found himself alone in the far corner. As teammates and the bench screamed 'SHOOT!', he launched the first shot of his game... NOTHING BUT NET! BALL GAME! The buzzer-beating three completed one of the biggest playoff upsets in league history, sending Thrillers to the semifinals and ending LMBA Jam's title defense in stunning fashion.",
  },
  {
    awardId: "2026-qf-dont-come-out-the-house-award",
    seasonId: "2026",
    week: 8,
    awardName: "Don't Come Out The House Award",
    recipientName: "Free Agent Team",
    seasonTeamId: "2026-free-agent-team",
    title: "'Cause The Gang Outside",
    body:
      "Free Agent Team took one look at the quarterfinal matchup with Ball Starz and decided discretion was the better part of valor. After Ball Starz put 90 on their head in both regular-season meetings, the No. 8 seed did not even show up to the gym for the playoff rematch. Ball Starz advanced without breaking a sweat, while Free Agent Team earned the rare postseason award for staying home entirely.",
  },
  {
    awardId: "2026-qf-big-baller-award",
    seasonId: "2026",
    week: 8,
    awardName: "Quarterfinals Big Baller Award",
    recipientName: "Doug Adams",
    playerId: "doug-adams",
    seasonTeamId: "2026-thrillers",
    title: "Refused To Let The Season End",
    body:
      "Every time LMBA Jam looked ready to put the game away, MVP-contender Doug Adams answered. With Thrillers trailing by double digits multiple times in the second half, Adams kept firing from deep and attacking the basket. His biggest play came with just over a minute remaining when he converted a critical and-one to tie the game at 47 and force the defending champions to sweat. Adams finished with 23 points and carried Thrillers to one of the greatest playoff upsets the league has ever seen.",
  },
  {
    awardId: "2026-qf-witness-protection-award",
    seasonId: "2026",
    week: 8,
    awardName: "Witness Protection Award",
    recipientName: "Trust The Process Defense",
    seasonTeamId: "2026-trust-the-process",
    title: "Has Anyone Seen Tom Hays?",
    body:
      "Thomas Hays entered the playoffs averaging 15.0 points per game and serving as Prestige Worldwide's primary offensive weapon. By the end of the quarterfinals, he had completely disappeared from the box score. Trust The Process swarmed every touch, denied driving lanes, and forced Prestige to search elsewhere for offense. The result was a dominant 67-46 victory and a semifinal berth, highlighted by one of the most impressive defensive performances of the season.",
  },
  {
    awardId: "2026-qf-no-subs-no-problem-award",
    seasonId: "2026",
    week: 8,
    awardName: "No Subs, No Problem Award",
    recipientName: "Department of Offense",
    seasonTeamId: "2026-department-of-offense",
    title: "Five Guys",
    body:
      "Department of Offense entered the quarterfinals with exactly five available players and no margin for error. After falling behind by six at halftime against a fully loaded Hash-Slinging Slashers squad, DOO simply refused to fold. Led by Eli Ratliff's 17 points and contributions from every player in the lineup, Department of Offense battled through fatigue, erased the deficit, and completed one of the grittiest wins of the season to advance to the semifinals.",
  }
];
