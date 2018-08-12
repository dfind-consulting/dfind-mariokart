<template>
<div class="container">
  <div class="columns is-centered">
    <table class="table">
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(player, index) in players">
          <tr :key="player.id">
            <td>{{index + 1}}</td>
            <td>{{player.name}}</td>
            <td>{{player.duration | millisToHumanReadable}}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import db from '@/firebase/init';

export default {
  name: 'Leaderboard',
  data() {
    return {
      players: [],
    };
  },
  created() {
    db.collection('players').orderBy("duration").limit(100).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let player = doc.data()
          player.id = doc.id
          this.players.push(player)
        });
      });
  },
  filters: {
    millisToHumanReadable(duration) {
      let minutes = Math.floor(duration / 60000)
      let seconds = ((duration % 60000) / 1000).toFixed(0);
      let centiseconds = ((duration / 10) % 100).toFixed(0);
      return minutes + "'" + (seconds < 10 ? '0' : '') + seconds + "''" + (seconds < 10 ? '0' : '') + centiseconds;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
