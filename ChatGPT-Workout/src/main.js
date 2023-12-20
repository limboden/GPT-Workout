let app = Vue.createApp({
  data() {
    return {
      age: 0,
      weight: 0,
      weightInKg: false,
      heightFeet: 0,
      heightInches: 0,
      daysOfTheWeek: [],
    }
  },
  methods: {
    //this is where you would make a method that uses gpt api once we set that up?
    getChatGPTRespose() {
      return 0
    }
  }
})

app.component('workoutForm', {
  props: ['age', 'weight', 'weightInKg', 'heightFeet', 'heightInches', 'daysOfTheWeek'],





  template: `
    <form action="">

      <label>
        Age:
      </label>
      <input type="number">
      <br><br>
      <label>
        height:
      </label>
      <input type="number">
      <label>'</label>
      <input type="number">
      <label>"</label>
      <br><br>
      <label>
        weight:
      </label>
      <input type="number">
      <input list="weight-measurements" name="weight">
      <datalist id="weight-measurements">
        <option value="lbs">
        <option value="kg">

      </datalist>
      <br><br>
      <label>
        days of the week:
      </label>
      <br><br>
      <input type="checkbox" id="monday" name="monday" value="monday">
      <label for="monday"> monday</label><br>
      <input type="checkbox" id="tuesday" name="tuesday" value="tuesday">
      <label for="tuesday"> tuesday</label><br>
      <input type="checkbox" id="wednesday" name="wednesday" value="wednesday">
      <label for="wednesday"> wednesday</label><br>
      <input type="checkbox" id="thursday" name="thursday" value="thursday">
      <label for="thursday"> thursday</label><br>
      <input type="checkbox" id="friday" name="friday" value="friday">
      <label for="friday"> friday</label><br>
      <input type="checkbox" id="saturday" name="saturday" value="saturday">
      <label for="saturday"> saturday</label><br>
      <input type="checkbox" id="sunday" name="sunday" value="sunday">
      <label for="sunday"> sunday</label><br>
      <input type="submit">
    </form>
  `
})