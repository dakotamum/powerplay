<template>
  <div>
    <GameInfo
      v-for="(game, index) in games"
      :key="index"
      :homeTeam="game.home_team_record.name"
      :awayTeam="game.away_team_record.name"
      :date="formatDate(game.start)"
      :time="formatTime(game.start)"
      :hasRsvped="false"
      :homeScore="game.home_team_score"
      :awayScore="game.away_team_score"
      :homeLogo="getLogo(/*game.home_team_record.logo_id*/)"
      :awayLogo="getLogo(/*game.away_team_record.logo_id*/)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useScheduleStore } from 'src/stores/scheduleStore';
import GameInfo from 'components/GameInfo.vue';
import { TimeString } from 'src/models/types/timeString';
import { Game } from 'src/models/Game';

const store = useScheduleStore();
const games = ref<Game[]>([]);

// Load the example data on component mount
onMounted(() => {
  store.loadExampleData();
  games.value = store.games;
});

// Helper functions to format date and time
const formatDate = (timeString: TimeString) => {
  const date = new Date(timeString);
  return date.toLocaleDateString();
};

const formatTime = (timeString: TimeString) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString();
};

// Function to get the logo path
const getLogo = (/*logoId: string*/) => {
  // Assuming you have a function or a mapping to get logo path by logoId
  // For example:
  return 'src/assets/awaygoodteam.png';
};
</script>
