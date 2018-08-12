<template>
  <div class="home">
    <Leaderboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Leaderboard from '@/components/Leaderboard.vue';
import AddTime from '@/components/AddTime.vue';

export default {
  name: 'home',
  components: {
    Leaderboard,
    AddTime
  },
};
</script>
