import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import Index from '../../Index'
function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Index />} />

                </Route>
            </Routes>
        </>
    )
}

export default Router