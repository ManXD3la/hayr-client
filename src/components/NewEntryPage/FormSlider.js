import React, {Component} from 'react';
import EntryFormContext from '../../contexts/EntryFormContext';
import Slider from '@material-ui/core/Slider';

class FormSlider extends Component {
    static contextType = EntryFormContext;
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
        if (this.props.change === 'energy') {
            this.context.changeEnergy(newValue)
        }
        else {this.context.changePleasant(newValue)}
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