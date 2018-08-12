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
            <td>{{player.time}}</td>
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
    db.collection('players').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let player = doc.data()
          player.id = doc.id
          this.players.push(player)
        });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
