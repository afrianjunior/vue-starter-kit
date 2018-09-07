import { mapGetters } from 'vuex' 
export default {
  data () {
    return {
      increment: 0
    }
  },
  computed: {
    ...mapGetters([
      'planets'
    ])
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
    },
    renderPlanets (h) {
      switch (this.planets.status) {
        case 'fetched':
          return this.printPlanets(h)
          break
        case 'fetching':
          return (
            <div>
              Loading...
            </div>
          )
          break
        case 'error':
          return (
            <div>
              Something Error
            </div>
          )
          break
        default:
          break
      }
    }
  },
  render(h) {
    return (
      <div>
        <h1>Vue with jsx</h1>
        this is increment {this.increment} <br/>
        <button onClick={this.handleIncrement}>add+</button>
        {this.renderPlanets(h)}
      </div>
    )
  }
}