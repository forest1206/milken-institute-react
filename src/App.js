import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import ThemeProvider from './ThemeProvider';

// style
import './App.scss';

// Layout
export default function App() {
    return (
        <ThemeProvider>
            <React.Fragment>
                <BrowserRouter>
                    <AppLayout />
                </BrowserRouter>
            </React.Fragment>
        </ThemeProvider>
    );
}
