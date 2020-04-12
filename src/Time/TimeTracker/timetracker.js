import React from 'react';
import moment from "moment";


class Timetracker extends React.Component {


    state = {
        currentTime: moment().format('HH:mm:ss')
    }

    componentDidMount() {
        this.intervalIdx = setInterval(() => this.setState({
            currentTime: moment().format('HH:mm:ss')
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalIdx);
    }


    render() {

        return (

            <div>

                time:
                <div>{this.state.currentTime}</div>
                <div>(start time:{this.state.currentTime})
                    -(end time: {this.state.currentTime})
                    =(all time: {})
                    -(pause time: {})
                    =(result: {})
                </div>
                <div style={{
                    color: "red",
                    border: "1px solid black",
                    width: '100px',
                    margin: '0 auto'

                }}>play
                </div>
            </div>

        );
    }

}

export default Timetracker;
