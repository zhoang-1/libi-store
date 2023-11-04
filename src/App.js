import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicRouter } from './router';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRouter.map((route, index) => {
                    const Pages = route.component;
                    return <Route key={index} path={route.path} element={<Pages />} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
