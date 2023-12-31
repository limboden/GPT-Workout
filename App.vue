<script>
export default {
  data() {
    return {
      msg: 'Hello World!',
      isMale: false,
      isLBS: true,
      weightLBS: 0,
      weightKG: 0,
      height: 0,
      daysAWeek: 0,
      feet: 0,
      inches: 0,
    } 
  }, 

  methods: {
    toggleGender() {
      this.isMale = !this.isMale
    },
    toggleWeightMeasurement() {
      this.isLBS = !this.isLBS
    },
    output() {

    },
  }
}
</script>

<template>
  <h1>{{ isMale ? 'MALE' : 'FEMALE' }}</h1>
  <button @click="toggleGender">Switch to {{ isMale ? 'FEMALE' : 'MALE' }}</button>
  <button @click="toggleWeightMeasurement">Switch to {{ isLBS ? 'LBS' : 'KG' }}</button>
  <h1>Weight in LBS: {{ weightLBS }}lbs</h1>
  <input type="number" v-model="weightLBS">
  <h1>Weight in KG: {{ weightLBS }}lbs</h1>
  <input type="number" v-model="weightLBS"> 
  <h1>Height: {{ feet }}, {{inches}}</h1>

  <select name="feet" id="feet">
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
  </select>'

  <select name="inches" id="inches">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
  </select>"

</template>