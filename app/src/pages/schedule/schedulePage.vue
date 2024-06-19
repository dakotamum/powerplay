<template>
  <div>
    <GameInfo
      v-for="(game, index) in games"
      :key="index"
      :game="game"
      :showRsvpButton="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useScheduleStore } from 'src/stores/scheduleStore';
import GameInfo from 'components/GameInfo.vue';
// import { TimeString } from 'src/models/types/timeString';
import { Game } from 'src/models/Game';

const store = useScheduleStore();
const games = ref<Game[]>([]);

// Load the example data on component mount
onMounted(() => {
  store.loadExampleData();
  games.value = store.games;
});

// // Helper functions to format date and time
// const formatDate = (timeString: TimeString) => {
//   const date = new Date(timeString);
//   return date.toLocaleDateString();
// };

// const formatTime = (timeString: TimeString) => {
//   const date = new Date(timeString);
//   return date.toLocaleTimeString();
// };

// // Function to get the logo path
// const getLogo = (/*logoId: string*/) => {
//   // Assuming you have a function or a mapping to get logo path by logoId
//   // return `/assets/logos/${logoId}.png`;
//   return 'assets/test/awaygoodteam.png';
// };
</script>
