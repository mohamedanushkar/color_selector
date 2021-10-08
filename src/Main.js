import { Component} from 'react';
import Box from './box';

class Main extends Component {

    static defaultProps = {
        colors : [
            {id: 1, color: 'red'},
            {id: 2, color: 'green'},
            {id: 3, color: 'blue'},
            {id: 4, color: 'purple'},
            {id: 5, color: 'yellow'},
            {id: 6, color: 'black'}
        ]
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.removeBlock = this.removeBlock.bind(this);
        this.state = {
            colorSingle: [],
            index: 0
        }
    }

    handleClick(e) {
        let {colorSingle} = this.state;
        this.setState(this.addBox(e));
        console.log(colorSingle);
    }

    addBox(e) {
        let {colorSingle} = this.state;
        return { colorSingle: [...colorSingle, {id: Date.now(), color: 'red'} ]};
    }    

    removeBlock(e){
       
        var array = [...this.state.colorSingle];
        var index = array.indexOf(e.target.value);
        console.log(e);
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({colorSingle: array});
        }
    }


    render() {
        const {colors} = this.props;
        let {colorSingle} = this.state;
        return (            
            <div className="AppMain">
                <div className="ParentElement">
                
                {colorSingle}


                </div>

                <div className="ColorSelector">
                {colors.map ((p) => (
                    <div key={p.id} onClick={this.handleClick} style={{backgroundColor: p.color}} className="Ball" ></div>
                        
                ))}                
                </div>

                
            </div>
        )
    }
}

export default Main;