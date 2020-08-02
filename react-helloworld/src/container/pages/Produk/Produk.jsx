import React, { Component, Fragment } from 'react';
import './Produk.css';
import CardProduk from './Card/CardProduk';
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

class Produk extends Component {
    // state = {
    //     order: 4
    // }


    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })

    // }

    render() {
        console.log(this);
        return (
            <Fragment>
                <h3>Halaman Produk</h3>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://www.freepik.com/free-vector/chicken-sitting-nest-logo-linear-vector-icon_6756249.htm#page=2&query=chicken&position=15" />
                    </div>
                    <div className="cart">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduk />
            </Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }


// export default connect(mapStateToProps)(Produk);
export default GlobalConsumer(Produk);