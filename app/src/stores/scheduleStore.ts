import { defineStore } from 'pinia';
import { GameStatus, type Game } from 'src/models/Game';
import { RosterId, SeasonId, TeamRecordId, UserId, VenueId, LogoId, TeamGuid, LeagueRecordId, LeagueGuid } from 'src/models/ids';
import { TimeString } from 'src/models/types/timeString';
import { TimeString as TimeUtil } from 'src/models/types/timeString';
import type { User } from 'src/models/User';
import type { Roster } from 'src/models/Roster';
import type { TeamRecord } from 'src/models/TeamRecord';
import type { Venue } from 'src/models/Venue';
import type { LeagueRecord } from 'src/models/LeagueRecord';

export const useScheduleStore = defineStore('schedule', {
  state: () => ({
    logos: [] as { id: LogoId, src: string }[],
    games: [] as Game[],

  }),
  actions: {
    loadExampleData() {
      this.logos = [{ id: 1 as unknown as LogoId, src: 'src/assets/test/homeys.png' }, { id: 2 as unknown as LogoId, src: 'src/assets/test/awaygoodteam.png' }
      ];
      this.games = [
        {
          id: 1, // id is a number
          season_id: 'season1' as unknown as SeasonId,
          start: TimeUtil.fromString('2024-01-25T21:00:00Z') as TimeString,
          venue: {
            id: 1, // id is a number
            name: 'Main Arena',
            location: '123 Arena St.',
            capacity: 5000,
            address: '123 Arena St., City, State, Zip', // Added address field
            locker_rooms: ['A1', 'B1'], // Added locker_rooms field
            created_at: TimeUtil.fromString('2020-01-01T00:00:00Z') as TimeString,
            updated_at: TimeUtil.fromString('2020-01-01T00:00:00Z') as TimeString,
          } as Venue,
          venue_id: 1 as unknown as VenueId, // id is a number
          status: GameStatus.SCHEDULED, // Use GameStatus as a value
          home_team_record: {
            id: 1, // id is a number
            team_guid: 'teamGuid1' as unknown as TeamGuid,
            name: 'The Homeboys',
            logo_id: 1 as unknown as LogoId,
            color: 'blue',
            league_record_id: 'leagueRecord1' as unknown as LeagueRecordId, // Correctly cast league_record_id
            league_record: {
              id: 1, // id is a number
              league_guid: 'league1' as unknown as LeagueGuid, // Correctly use league_guid
              wins: 10,
              losses: 2,
              ties: 1,
            } as unknown as LeagueRecord, // Cast the entire league_record object
            roster: {
              id: 1, // id is a number
              players: [
                {
                  id: 1, // id is a number
                  first_name: 'John',
                  last_name: 'Doe',
                  email: 'john.doe@example.com',
                  phone: '123-456-7890',
                  roles: [],
                  skill_level: 5,
                  current_teams: [],
                  dob: TimeUtil.fromString('1990-01-01') as TimeString,
                } as unknown as User,
              ],
              captain: {
                id: 2, // id is a number
                first_name: 'Jane',
                last_name: 'Smith',
                email: 'jane.smith@example.com',
                phone: '098-765-4321',
                roles: [],
                skill_level: 6,
                current_teams: [],
                dob: TimeUtil.fromString('1992-02-02') as TimeString,
              } as unknown as User,
              captain_id: 2 as unknown as UserId, // id is a number
            } as unknown as Roster,
            roster_id: 1 as unknown as RosterId, // id is a number
            wins: 10,
            losses: 2,
          } as unknown as TeamRecord, // Cast the entire team_record object
          home_team_record_id: 1 as unknown as TeamRecordId, // id is a number
          home_team_roster: {
            id: 1, // id is a number
            players: [
              {
                id: 1, // id is a number
                first_name: 'John',
                last_name: 'Doe',
                email: 'john.doe@example.com',
                phone: '123-456-7890',
                roles: [],
                skill_level: 5,
                current_teams: [],
                dob: TimeUtil.fromString('1990-01-01') as TimeString,
              },
            ],
            captain: {
              id: 2, // id is a number
              first_name: 'Jane',
              last_name: 'Smith',
              email: 'jane.smith@example.com',
              phone: '098-765-4321',
              roles: [],
              skill_level: 6,
              current_teams: [],
              dob: TimeUtil.fromString('1992-02-02') as TimeString,
            },
            captain_id: 2 as unknown as UserId, // id is a number
          } as unknown as Roster, // Cast the entire roster object
          home_team_roster_id: 1 as unknown as RosterId, // id is a number
          home_team_locker_room: 'A1',
          home_team_shots_on_goal: 10,
          home_team_score: 2,
          away_team_record: {
            id: 2, // id is a number
            team_guid: 'teamGuid2' as unknown as TeamGuid,
            name: 'A Way Good Team',
            logo_id: 2 as unknown as LogoId,
            color: 'red',
            league_record_id: 'leagueRecord2' as unknown as LeagueRecordId, // Correctly cast league_record_id
            league_record: {
              id: 2, // id is a number
              league_guid: 'league2' as unknown as LeagueGuid, // Correctly use league_guid
              wins: 8,
              losses: 4,
              ties: 1,
            } as unknown as LeagueRecord, // Cast the entire league_record object
            roster: {
              id: 2, // id is a number
              players: [
                {
                  id: 3, // id is a number
                  first_name: 'Alice',
                  last_name: 'Brown',
                  email: 'alice.brown@example.com',
                  phone: '321-654-0987',
                  roles: [],
                  skill_level: 4,
                  current_teams: [],
                  dob: TimeUtil.fromString('1988-03-03') as TimeString,
                } as unknown as User,
              ],
              captain: {
                id: 4, // id is a number
                first_name: 'Bob',
                last_name: 'White',
                email: 'bob.white@example.com',
                phone: '987-654-3210',
                roles: [],
                skill_level: 7,
                current_teams: [],
                dob: TimeUtil.fromString('1985-04-04') as TimeString,
              } as unknown as User,
              captain_id: 4 as unknown as UserId, // id is a number
            } as unknown as Roster,
            roster_id: 2 as unknown as RosterId, // id is a number
            wins: 8,
            losses: 4,
          } as unknown as TeamRecord,
          away_team_record_id: 2 as unknown as TeamRecordId, // id is a number
          away_team_roster: {
            id: 2, // id is a number
            players: [
              {
                id: 3 as unknown as UserId, // id is a number
                first_name: 'Alice',
                last_name: 'Brown',
                email: 'alice.brown@example.com',
                phone: '321-654-0987',
                roles: [],
                skill_level: 4,
                current_teams: [],
                dob: TimeUtil.fromString('1988-03-03') as TimeString,
              },
            ],
            captain: {
              id: 4 as unknown as UserId, // id is a number
              first_name: 'Bob',
              last_name: 'White',
              email: 'bob.white@example.com',
              phone: '987-654-3210',
              roles: [],
              skill_level: 7,
              current_teams: [],
              dob: TimeUtil.fromString('1985-04-04') as TimeString,
            },
            captain_id: 4 as unknown as UserId, // id is a number
          } as unknown as Roster, // Cast the entire roster object
          away_team_roster_id: 2 as unknown as RosterId, // id is a number
          away_team_locker_room: 'B1',
          away_team_shots_on_goal: 8,
          away_team_score: 1,
          score_keeper: {
            id: 5, // id is a number
            first_name: 'Charlie',
            last_name: 'Green',
            email: 'charlie.green@example.com',
            phone: '555-555-5555',
            roles: [],
            skill_level: 3,
            current_teams: [],
            dob: TimeUtil.fromString('1975-05-05') as TimeString,
          },
          score_keeper_id: 5 as unknown as UserId, // id is a number
          primary_referee: {
            id: 6, // id is a number
            first_name: 'Dave',
            last_name: 'Blue',
            email: 'dave.blue@example.com',
            phone: '444-444-4444',
            roles: [],
            skill_level: 5,
            current_teams: [],
            dob: TimeUtil.fromString('1980-06-06') as TimeString,
          } as unknown as User,
          primary_referee_id: 6 as unknown as UserId, // id is a number
          secondary_referee: {
            id: 7, // id is a number
            first_name: 'Eve',
            last_name: 'Red',
            email: 'eve.red@example.com',
            phone: '333-333-3333',
            roles: [],
            skill_level: 4,
            current_teams: [],
            dob: TimeUtil.fromString('1983-07-07') as TimeString,
          } as unknown as User,
          secondary_referee_id: 7 as unknown as UserId, // id is a number
        } as unknown as Game,
        // Add more example games as needed
      ];
    },
  },
});
