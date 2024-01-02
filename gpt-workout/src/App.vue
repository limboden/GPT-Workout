<script>
export default {
  data() {
    return {
      isMale: false,
      isLBS: true,
      weight: 0,
      height: 0,
      daysAWeek: 0,
      feet: null,
      inches: null,
      showUserInputToGPT: false,
      userInputToGPT: "test",

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
      this.isLBS = !this.isLBS;
    },
    output() {
      //call upon the gpt api to get output from our saved data
    },
    submitData() {
      const gender = this.isMale ? 'male' : 'female'
      const weightMeasurement = this.isLBS ? 'lbs' : 'kg'
      this.userInputToGPT = "Create a workout routine for me. I am a " 
      + gender + ", I am "
      + this.weight + " " + weightMeasurement +
      " , I am " 
      + this.feet + " foot " + 
      this.inches + ", and I want to workout " 
      + this.daysAWeek +  " days a week."
    },
  }
}
</script>

<template src="./template.html"></template>