import React, { Component, Fragment } from 'react';
import './LifeCycleComp.css'
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDrivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componenrDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 2000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate');
        // console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('this state', this.state);
        console.groupEnd();
        if (nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log(this)
        return (
            <Fragment>
                <h3>Ini adalah halaman Life Cycle </h3>
                <hr />
                <button className="btn" onClick={this.changeCount}>Component Button {this.props.count}</button>
                <hr />
                <p>Total Produk : {this.props.state.totalOrder}</p>
            </Fragment>
        )
    }
}

// const mapsStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapsStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);


