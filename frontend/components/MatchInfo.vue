<template>
  <div class="match-info" style="display: flex; flex-direction: column; margin-bottom: 10%; padding-left: 5%; border-left: 5px solid #eb5031;">
    <div style="display: flex; flex-direction: row;">
      <div style="width: 20%; display: flex; justify-content: left; align-items: center; border-radius: 10%;">
        <img src="assets/homeys.png" alt="Logo" style="width: 80%; border-radius: 10%;">
      </div>
      <!-- <div style="display: flex; flex-direction: column; width: 70%; background-color: magenta; justify-content: center;"> -->
      <div style="width: 70%;">
        <p class="" style="margin-bottom: 0px; margin-top: 0px; font-size: 120%;">{{ homeTeam }}</p>
        <p>Home</p>
      </div>
      <div style="width: 10%; align-items: center; justify-content: center; display: flex;">
        <!-- <p class="">{{ score !== null ? score : '' }}</p> -->
        <p class="">1</p>
      </div>
    </div>
    <div style="display: flex; flex-direction: row; font-weight: bold;">
      <div style="width: 20%; display: flex; justify-content: left; align-items: center;">
        <img src="assets/awaygoodteam.png" alt="Logo" style="width: 80%; border-radius: 10%;">
      </div>
      <div style="width: 70%;">
        <p class="" style="margin-bottom: 0px; margin-top: 0px; font-size: 120%;">{{ awayTeam }}</p>
        <p>Away</p>
      </div>
      <div style="width: 10%; align-items: center; justify-content: center; display: flex;">
        <!-- <p class="">{{ score !== null ? score : '' }}</p> -->
        <p class="">2</p>
      </div>
    </div>
    <p class="">{{ date }}</p>
    <p class="">{{ time }}</p>
    <!-- <p class="" >"{{ hasRsvped ? 'check' : 'RSVP' }}"</p> -->
    <button class="btn btn-primary" style="width: 20%; justify-content: right; align-items: right; right: 0;">RSVP</button>
  </div>
</template>

<script>
export default {
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
    score: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style scoped>
.match-info {
  display: flex;
  justify-content: center;
  align-items: left;
}
</style>
