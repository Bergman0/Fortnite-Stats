<template>
<div class="container">
    <h1>Fortnite Stats</h1>
    <form @submit.prevent="getStats">
        <div class="formContainer">
            <!-- <label for="">Username</label> -->
            <div class="submit">
                <div class="platform">
                  <span @click="pc" :class="{ isActive: platform === 'pc' }"><i class="fas fa-desktop"></i></span>
                  <span @click="ps4" :class="{ isActive: platform === 'ps4' }"><i class="fab fa-playstation"></i></span>
                  <span @click="xb1" :class="{ isActive: platform === 'xb1' }"><i class="fab fa-xbox"></i></span>
                </div>
                <input type="text" v-model="username" placeholder="Username">
                <!-- <input type="submit" value="Submit"> -->
                <!-- <button @click="compare" type="button" class="compare">Compare player</button> -->
            </div>
        </div>
    </form>
    <loader :loading="loading"></loader>
    <div class="noUser" v-if="noUser">
      <p>User not found</p>
    </div>
    <div class="stats1" v-if="stats">
        <div class="solo stat">
            <h3>Solo</h3>
            <p>Wins: {{ stats.group.solo['wins'] }}</p>
            <p>Kills: {{ stats.group.solo['kills'] }}</p>
            <p>KD: {{ stats.group.solo['k/d'] }}</p>
            <p>Matches: {{ stats.group.solo['matches'] }}</p>
        </div>
        <div class="duo stat">
            <h3>Duo</h3>
            <p>Wins: {{ stats.group.duo['wins'] }}</p>
            <p>Kills: {{ stats.group.duo['kills'] }}</p>
            <p>KD: {{ stats.group.duo['k/d'] }}</p>
            <p>Matches: {{ stats.group.duo['matches'] }}</p>
        </div>
        <div class="squad stat">
            <h3>Squad</h3>
            <p>Wins: {{ stats.group.squad['wins'] }}</p>
            <p>Kills: {{ stats.group.squad['kills'] }}</p>
            <p>KD: {{ stats.group.squad['k/d'] }}</p>
            <p>Matches: {{ stats.group.squad['matches'] }}</p>
        </div>
    </div>
    <div class="lifetimeStatsContainer" v-if="stats">
      <div class="lifetimeStats">
        <h3>Lifetime Stats</h3>
        <div class="columns">
          <div class="column-1">
          <p>Wins: {{ stats.lifetimeStats['wins'] }}</p>
          <p>Kills: {{ stats.lifetimeStats['kills'] }}</p>
          <p>KD: {{ stats.lifetimeStats['k/d'] }}</p>
        </div>
        <div class="column-1">
          <p>Matches: {{ stats.lifetimeStats['matches'] }}</p>
          <p>Top 10s: {{ stats.lifetimeStats['top10s'] }}</p>
          <p>Top 3s: {{ stats.lifetimeStats['top3s'] }}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import loader from './Loader'
export default {
  components: {
    loader
  },
  data() {
    return {
      username: '',
      platform: 'pc',
      stats: null,
      loading: false,
      noUser: false,
      comparing: false
    }
  },
  methods: {
    getStats() {
      this.loading = true
      this.stats = null
      this.noUser = false
      axios
        .get(`http://localhost:3000/stats/${this.username}/${this.platform}`)
        .then(response => {
          this.loading = false
          if (response.data.err) return (this.noUser = true)
          this.stats = response.data.stats
          console.log(response.data)
        })
        .catch(err => {
          this.loading = false
          console.log(err)
        })
    },
    pc() {
      this.platform = 'pc'
    },
    ps4() {
      this.platform = 'ps4'
    },
    xb1() {
      this.platform = 'xb1'
    },
    compare() {
      this.comparing = true
    }
  }
}
</script>

<style scoped>
.container {
  color: #fff;
  height: 100%;
  /* background-image: url('https://i.imgur.com/CP6BKOG.jpg'); */
  background-image: url('../assets/fortnitebus.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formContainer {
  display: flex;
  flex-direction: column;
}
form label {
  margin-bottom: 10px;
  font-weight: 700;
}
.platform {
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: rgba(1, 1, 1, 0.7);
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.platform span {
  font-size: 24px;
  padding: 0 6px;
  cursor: pointer;
  color: #b1b1b1;
}
.platform span:hover {
  color: #fff;
}
.isActive {
  color: #fff !important;
}
.submit {
  display: flex;
}
form input {
  font-size: 16px;
  padding: 5px 10px;
  font-family: 'Roboto', sans-serif;
  border: none;
  background-color: rgba(1, 1, 1, 0.7);
  color: #fff;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  outline: none;
}
form input[type='submit'] {
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 10px 15px;
  background-color: #27c6cc;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
.compare {
  margin-left: 15px;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  background-color: rgba(74, 74, 74, 0.7);
  color: #cccaca;
}

.loading {
  margin-top: 20px;
}

.stats1 {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.stat {
  padding: 10px 50px;
  background-color: rgba(1, 1, 1, 0.7);
  margin: 0 30px;
}

.lifetimeStatsContainer {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lifetimeStats {
  background-color: rgba(1, 1, 1, 0.7);
  padding: 10px 50px;
}
.columns {
  display: flex;
}
.column-1 {
  margin: 0 30px;
}

@media screen and (max-width: 800px) {
  .stats1 {
  }
  .stat {
    margin-bottom: 30px;
  }
  .stat:last-child {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 500px) {
  .stats1 {
    flex-direction: column;
    align-items: center;
  }
  .stat {
    margin: 15px 0;
  }
  .lifetimeStats {
    padding: 10px 30px;
  }
}
</style>
