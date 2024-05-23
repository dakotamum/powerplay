<template>
  <q-card class="match-info" style="margin-bottom: 10%; padding-left: 5%; border-left: 5px solid #eb5031;">
    <div class="team-wrapper" :style="homeScore > awayScore ? { fontWeight: 'bold' } : {}">
      <div class="team-logo">
        <img class="logo" :src="homeTeamLogo" alt="Home Team Logo" />
      </div>
      <div class="team-name-wrapper">
        <p class="team-name">{{ homeTeam }}</p>
        <p>Home</p>
      </div>
      <div class="score">
        <p>{{ homeScore !== null ? homeScore : '' }}</p>
      </div>
    </div>
    <div class="team-wrapper" :style="awayScore > homeScore ? { fontWeight: 'bold' } : {}">
      <div class="team-logo">
        <img class="logo" :src="awayTeamLogo" alt="Away Team Logo" />
      </div>
      <div class="team-name-wrapper">
        <p class="team-name">{{ awayTeam }}</p>
        <p>Away</p>
      </div>
      <div class="score">
        <p>{{ awayScore !== null ? awayScore : '' }}</p>
      </div>
    </div>
    <p class="date-time">{{ date }}</p>
    <p class="time-time">{{ time }}</p>
    <div class="rsvp">
      <q-btn v-if="!hasRsvped" label="RSVP" color="primary" @click="rsvp" />
      <div v-else class="checkmark-wrapper">
        <span class="checkmark">&#10003;</span>
      </div>
    </div>
  </q-card>
</template>

<script>
import { QBtn, QCard } from 'quasar'

export default {
  name: 'GameInfo',
  components: {
    QBtn,
    QCard
  },
  props: {
    homeTeam: {
      type: String,
      default: "The Homeys"
    },
    awayTeam: {
      type: String,
      default: "A Way Good Team"
    },
    date: {
      type: String,
      default: "Wed, Jan 25, 2024"
    },
    time: {
      type: String,
      default: "9:00 - 10:15 PM"
    },
    hasRsvped: {
      type: Boolean,
      default: false
    },
    homeScore: {
      type: Number,
      default: 0
    },
    awayScore: {
      type: Number,
      default: 0
    },
    homeTeamLogo: {
      type: String,
      default: "assets/homeys.png"
    },
    awayTeamLogo: {
      type: String,
      default: "assets/awaygoodteam.png"
    }
  },
  methods: {
    rsvp() {
      this.$emit('rsvp');
    }
  }
}
</script>

<style scoped>
.team-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
}
.match-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.team-logo {
  width: 20%;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 10%;
}
.logo {
  width: 80%;
  border-radius: 10%;
}
.team-name-wrapper {
  width: 70%;
}
.team-name {
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 120%;
}
.score {
  width: 10%;
  align-items: center;
  justify-content: center;
  display: flex;
}
.date-time {
  margin-bottom: 0px;
}
.rsvp {
  width: 20%;
  justify-content: right;
  align-items: right;
  right: 0;
}
.checkmark-wrapper {
  display: flex;
  align-items: center;
}
.checkmark {
  color: green;
  font-size: 24px;
}
</style>
