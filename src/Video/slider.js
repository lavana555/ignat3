import React from 'react';
import classes from './slider.module.css'


class Slider extends React.Component {


    myRef = React.createRef()


    changedPoint = (myRef) => {
        const newValue = (myRef.currentTarget.value)

        this.props.ChangedVolume(newValue / 10)
    }


    render() {
        return (
            <div>
                volume
                <div className={classes.slidecontainer}>
                    <input type="range" min="1" max="10"
                           value={(this.props.volume * 10)}
                           onChange={this.changedPoint}
                           className={classes.slider} ref={this.myRef} id="myRange" />
                </div>

            </div>
        );
    }

}

export default Slider;
