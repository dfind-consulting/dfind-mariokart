<template>
<div class="container is-fullhd">
<section>
  <div class="columns is-centered">
      <figure class="image logo">
      <a href="https://dfindconsulting.no/"><img src="@/assets/logo.png"></a>
    </figure>
  </div>
</section>
<section>
  <div class="columns is-centered">
    <table class="table leaderboard">
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
  </section>
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
.leaderboard * {
  color: orange;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  /* background: -webkit-linear-gradient(#366d0a, #2b1205);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  font-size: 25px;
}

.table th {
  color: orangered;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.logo {
  width: 500px;
  margin-bottom: 20px
}
</style>
