
import React, { Children, useEffect } from 'react'
import { createContext } from 'react'
import { getCategory, getData } from '../service/Api'
import { useState } from 'react'
import { data } from 'react-router'

export const DATA = createContext([])
function DataContext({ children }) {

    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState([])
    useEffect(() => {
        getData().then(res => setProduct(res))
        getCategory().then(res => setCategory(res))
    }, [])
    return (
        <>
            <DATA.Provider value={{ product, cart, setCart, category }}>
                {children}

            </DATA.Provider>

        </>
    )
}

export default DataContext
