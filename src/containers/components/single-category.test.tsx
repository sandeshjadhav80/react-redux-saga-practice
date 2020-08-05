import React from "react"
import { render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils';

import SingleCategoryComp from './single-category';
import Category from '../entity/category.entity';

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

it("render component and check category render correctly or not", () => {
    const cat: Category = {categoryId: '1', categoryName: 'cat1'};
    act(() => {
        render(<SingleCategoryComp category={cat} index={2} />, container);
    })
    expect(container.querySelector('.MuiTypography-body1').textContent).toBe('cat1')
})