<template>
  <q-card bordered class="match-info" @click="goToGameDetails">
    <q-card-section class="q-pa-xs">
      <q-item class="team-wrapper">
        <q-item-section avatar>
          <!-- <q-img :src="homeTeamLogo" alt="Logo" class="team-logo" /> -->
        </q-item-section>
        <q-item-section class="team-details">
          <q-item-label
            :class="{ 'text-bold': game.home_team_score > game.away_team_score }"
            class="team-name"
          >
            {{ game.home_team_record.name }}
          </q-item-label>
          <q-item-label caption class="home-away-label">Home</q-item-label>
        </q-item-section>
        <q-item-section side class="score-section">
          <q-item-label
            :class="{ 'text-bold': game.home_team_score > game.away_team_score }"
          >
            {{ game.home_team_score !== null ? game.home_team_score : '' }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <q-item class="team-wrapper">
        <q-item-section avatar>
          <!-- <q-img :src="awayTeamLogo" alt="Logo" class="team-logo" /> -->
        </q-item-section>
        <q-item-section class="team-details">
          <q-item-label
            :class="{ 'text-bold': game.away_team_score > game.home_team_score }"
            class="team-name"
          >
            {{ game.away_team_record.name }}
          </q-item-label>
          <q-item-label caption class="home-away-label">Away</q-item-label>
        </q-item-section>
        <q-item-section side class="score-section">
          <q-item-label
            :class="{ 'text-bold': game.away_team_score > game.home_team_score }"
            class="score"
          >
            {{ game.away_team_score !== null ? game.away_team_score : '' }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <q-item class="datetime-wrapper">
        <q-item-section class="datetime-details">
          <q-item-label>{{ props.game.start }}</q-item-label>
          <q-item-label>{{ props.game.start }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="showRsvpButton" side class="rsvp-section">
          <q-btn
            v-if="true"
            size="sm"
            color="primary"
            class="active-button no-cursor-change no-pointer-events"
          >
            RSVP
          </q-btn>
          <q-icon
            v-else
            name="check_circle"
            color="green"
            size="md"
            class="checkmark"
          />
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Game } from 'src/models/Game';
import { useRouter } from 'vue-router';
const router = useRouter();

interface Props {
  game: Game;
  showRsvpButton: boolean;
}

const props = defineProps<Props>();

function goToGameDetails() {
  if (props.showRsvpButton) {
    router.push({ name: 'GameDetailsPage', params: { gameId: props.game.id, teamId: props.game.away_team_record.id } });
  }
}
</script>

<style scoped>
.match-info {
  cursor: pointer;
}
.team-logo {
  width: 8vw;
  height: 8vw;
  border-radius: 10%;
}
.text-bold {
  font-weight: 900;
  color: black;
}
.checkmark {
  font-size: 2.5em;
}
.active-button {
  background-color: #1976d2; /* Quasar primary color */
  color: white;
  opacity: 1; /* Ensures the button looks active */
}

.no-cursor-change {
  cursor: default;
}

.no-pointer-events {
  pointer-events: none;
}

@media (min-width: 768px) {
  .team-logo {
    width: 4vw;
    height: 4vw;
  }
}
</style>
