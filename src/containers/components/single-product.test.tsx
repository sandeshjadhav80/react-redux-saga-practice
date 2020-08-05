import React from "react"
import { render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils';

import SingleProductComp from './single-product';
import Product from '../entity/product.entity';

let container:any = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("render component and check product render correctly or not", () => {
    const product: Product = {productId: '1', title: 'product1', description: 'sdf', productImage: 'https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg', quantity: 100};
    act(() => {
        render(<SingleProductComp product={product} index={2} />, container);
    })
    expect(container.querySelector('h2').textContent).toBe('product1')
})