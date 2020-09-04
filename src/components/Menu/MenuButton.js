import React,{Component} from 'react'
import './style_menu.css'

class MenuButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
           Path: "",
           comp_id:"",
           name:"",
        };
    }
    
    componentDidMount() {
        this.check_state();
        this.timer = setInterval(() => this.check_state(), 50000);
    }         
    
    check_state = () => {
        switch(this.props.number){
            case 1:
                this.setState({Path:"Home()"})
                this.setState({comp_id:"leftblogMenyBox"})
                this.setState({name:"Home"})
                break;
                
            case 2:
                this.setState({Path:"Catagories()"})
                this.setState({comp_id:"meny-button-2"})
                this.setState({name:"Catagories"})
                break;
            
            case 3:
                this.setState({Path:"arkivet()"})
                this.setState({comp_id:"meny-button-3"})
                this.setState({name:"arkivet"})
                break;
                
            case 4:
                this.setState({Path:"om-oss()"})
                this.setState({comp_id:"meny-button-4"})
                this.setState({name:"om oss"})
                break;
             
            case 5:
                this.setState({Path: () => this.props.showLogin(true) })
                this.setState({comp_id:"rightblogMenyBox"})
                this.setState({name:"logga in"})
                break;
            case 6:
                this.setState({Path: () => this.props.showLogin("guest") })
                this.setState({comp_id:"rightblogMenyBox"})
                this.setState({name:"logga ut"})
                break;
            default:
                this.setState({Path:""})
                this.setState({comp_id:""})
                this.setState({name:""})
            break;
        }
    }
       
    render() {
        return (
        <button onClick={this.state.Path}  id={this.state.comp_id} className="blogMenyBox">
            <p> 
                <b>
                    <u>{this.state.name}</u>
                </b>
            </p>
        </button>
        );
    }
}
export default MenuButton