import React, {Component} from 'react';
import Slider from '@material-ui/core/Slider';

class FormSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 127.5
        }
    }

    setSliderValue = (event, newValue) => {
        this.setState({
            value: newValue
        });
        console.log(this.state.value)
    }



    render() {
        return (
            <Slider
                onChange={this.setSliderValue}
                min = {0}
                max = {255}
                defaultValue = {127}
            >
            </Slider>
        )
    }
}

export default FormSlider;