import React, { Component } from 'react';
import Counter from './Counter';

class CardProduk extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://www.kfc.com/assets/products/kfc-30-fill-up-81ce9cde18990a0a1105540c70a4dd320882fd976f731bd91463dbf3580cc007.jpg" />
                </div>
                <p className="produk-title">ENOUGH FOOD FOR TODAY – AND TOMORROW</p>
                <p className="produk-price">Rp. 35.000</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduk;