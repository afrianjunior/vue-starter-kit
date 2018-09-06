import { mapGetters } from 'vuex' 
export default {
  data () {
    return {
      increment: 0,
      dummyDatas: [
        {
          name: 'solo'
        }
      ]
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
    planets (h) {
      for (let i in this.dummyDatas) {
        return (
          <li>{ this.dummyDatas[i].name }</li>
        )
      }
    }
  },
  render(h) {
    return (
      <div>
        <h1>Vue with jsx</h1>
        this is increment {this.increment} <br/>
        <button onClick={this.handleIncrement}>add+</button>
        <ul>
          {this.planets(h)}
        </ul>
      </div>
    )
  }
}