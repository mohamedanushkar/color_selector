import { Component} from 'react';
import Measure from 'react-measure';

class Box extends Component {

    state = {
        dimensions: {
            top: -1
        },
    }
    

    render() {
        let { bg } = this.props;
        const { top , left} = this.state.dimensions;

        return (
            <div>
                <Measure
                    offset
                    onResize={contentRect => {
                    this.setState({ dimensions: contentRect.offset })
                    }}
                >
                   
                    {({ measureRef }) => (
                    <div ref={measureRef} >
                         <div className='Ball' style={bg}>Y:{top}<br/>X:{left}</div>
                    </div>
                    )}
                </Measure>
            </div>
        )
    }

}

export default Box;