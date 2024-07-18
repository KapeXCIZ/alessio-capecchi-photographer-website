import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CapturedEmotionsPage from './pages/CapturedEmotionsPage';
import SpeedTrackPage from './pages/SpeedTrackPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';



const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/captured-emotions' element={<CapturedEmotionsPage />} />
                <Route path='/speed-track' element={<SpeedTrackPage />} />
                <Route path='/*' element={<NotFoundPage />} />
            </Routes>
        </Layout>
    )
}

export default App;