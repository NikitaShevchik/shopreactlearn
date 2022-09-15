import React from 'react'
import { MainReducerState } from '../../interfaces'

type Props = Partial<MainReducerState>

const ProductList = (props: Props) => {
    console.log(props)
    return (
        <div>ProductList</div>
    )
}

export default ProductList