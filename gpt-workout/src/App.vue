<script>
export default {
  data() {
    return {
      msg: 'Hello World!',
      isMale: false,
      isLBS: true,
      weight: 0,
      height: 0,
      daysAWeek: 0,
      feet: null,
      inches: null,
    } 
  }, 

  methods: {
    toggleGender() {
      this.isMale = !this.isMale
    },
    toggleWeightMeasurement() {
      if(this.isLBS){
        this.weight = this.weight / 2.2046
      } else {
        this.weight = this.weight * 2.2046
      }
      this.isLBS = !this.isLBS
    },
    output() {
      //call upon the gpt api to get an output from our saved data
    },
  }
}
</script>

<template>
  <h1>{{ isMale ? 'MALE' : 'FEMALE' }}</h1>
  <button @click="toggleGender">Switch to {{ isMale ? 'FEMALE' : 'MALE' }}</button>
  <h1>Weight: {{ weight }} {{isLBS ? 'LBS' : 'KG'}}</h1>
  
  <input type="number" v-model="weight"> {{isLBS ? 'LBS' : 'KG'}}
  <button @click="toggleWeightMeasurement">Switch to {{ isLBS ? 'KG' : 'LBS' }}</button>
  <h1>Height: {{ feet }}, {{inches}}</h1>

  <select v-model="feet" name="feet" id="feet">
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
  </select>'

  <select v-model="inches" name="inches" id="inches">
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

  <h1>Days a week: {{daysAWeek}}</h1>
  <input type="number" v-model="daysAWeek"> days




</template>