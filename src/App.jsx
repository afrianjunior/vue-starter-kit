import { mapGetters } from 'vuex' 
export default {
  data () {
    return {
      increment: 0
    }
  },
  computed: {
    planets () {
      return this.$store.state.planets
    }
  },
  mounted () {
    this.$store.dispatch('FETCH_PLANETS')
  },
  methods: {
    handleIncrement () {
      this.increment++
    },
    printPlanets (h) {
      return (
        <ul>
          {this.planets.items.map((item, key) => (
            <li key={key}>{item.name}</li>
          ))}
        </ul>
      )
    }
  },
  render(h) {
    return (
      <div>
        <h1>Vue with jsx</h1>
        this is increment {this.increment} <br/>
        <button onClick={this.handleIncrement}>add+</button>
        {this.printPlanets(h)}
      </div>
    )
  }
}