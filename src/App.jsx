import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import Mugello2024Page from './pages/Mugello2024Page';
import GalleryPage from './pages/GalleryPage';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/gallery' >
                    <Route path='' element={<GalleryPage />} />
                    <Route path='mugello2024' element={<Mugello2024Page />} />
                </Route>
                <Route path='/*' element={<NotFoundPage />} />
            </Routes>
        </Layout>
    )
}

export default App;