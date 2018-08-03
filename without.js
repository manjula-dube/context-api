
const Family = (props) => (
  <div className= "family">
   <div className="family-details">{props.name}</div>
  </div>
)

class Person extends Component {

  state = {
    name : "manjula"
  }

  render() {
    return  <div className="name">
      {this.state.name}
      <Family name={this.state.name} />
    </div>
  }
}

const App = (props) => (

  <div className="App">
    <p>I am person</p>
    <Family name={props.name}/>
  </div>

)