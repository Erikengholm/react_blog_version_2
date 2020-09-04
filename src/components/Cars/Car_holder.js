import React,{Component} from "react";
import './style_car.css'
import db from '../../DataBase/Firebase'
var Cars =[];
class CARS extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isFetching: false,
          namn: "",
          carImg:"wait.jpg",
          flavor:"",
          score:"",
          like:""
      };
  }

  componentDidMount() {
    this.fetchCars();
    this.timer = setInterval(() => this.fetchCars(), 50000);
}
  fetchCars = () =>{
    db.collection('Car-base').orderBy("Name").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        Cars.push(doc);
      });
      this.update_state();
    }
    )
  }
update_state = () =>{
  const data = Cars[this.props.number].data()
  this.setState( { ...data  }  )
}

render() {
            return (
              <div className="card">
              <h5>{this.state.namn}</h5>
              <img src={'/Bilder/'+this.state.carImg}/>
             <p>{this.state.flavor}</p>
              <span>
      <div>{this.state.score}</div>
                  <a></a>
      <div>{this.state.like}</div>
              </span>
          </div>);
            
        }
      }
export default CARS