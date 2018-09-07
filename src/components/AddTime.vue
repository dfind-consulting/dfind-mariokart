  <template>
  <div class="container">
    <div class="columns is-centered extra-margins">
      <form @submit.prevent="addTime">
        <div class="field name">
          <label for="name">name</label>
          <input type="text" name="name" v-model="name">
        </div>
        <div class="field minutes">
          <label for="minutes">minutes</label>
          <input type="number" name="minutes" v-model="minutes">
        </div>
        <div class="field seconds">
          <label for="seconds">seconds</label>
          <input type="number" name="seconds" v-model="seconds">
        </div>
        <div class="field centiseconds">
          <label for="centiseconds">centiseconds</label>
          <input type="number" name="centiseconds" v-model="centiseconds">
        </div>
        <div class="field phone">
          <label for="phone">phone</label>
          <input type="text" name="phone" v-model="phone">
        </div>
        <div class="field">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn pink">Add Time</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';
import slugify from 'slugify';

export default {
  name: 'AddTimer',
  data() {
    return {
      name: null,
      phone: null,
      minutes: 0,
      seconds: 0,
      centiseconds: 0,
      slug: null,
      feedback: null,
    };
  },

  methods: {
    addTime() {
      if (this.name) {
        this.feedback = null;
        // create a slug
        this.slug = slugify(this.name, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        });
        // save to firestore
        db.collection('players').add({
          name: this.name,
          phone: this.phone,
          duration: (this.minutes * 60000) + (this.seconds * 1000) + (this.centiseconds * 10),
          slug: this.slug,
          created: Date.now(),
        }).then(() => {
          this.$router.push({
            name: 'leaderboard',
          });
        }).catch((err) => {
          this.feedback = err;
        });
      } else {
        this.feedback = 'Adding new time failed';
      }
    },
  },
};
</script>

<style>
</style>
