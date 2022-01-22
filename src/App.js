import { useCallback, useState } from 'react';
import { AppContextProvider, appInitialState } from './context/AppContext';
import ProductPage from './pages/ProductPage';

const App = () => {
    const [appState, setAppState] = useState(appInitialState);

    const changeAppState = useCallback((newState) => {
        setAppState((oldState) => {
            return {
                ...oldState,
                ...newState,
            };
        });
    }, []);

    return (
        <AppContextProvider
            value={{
                appState,
                changeAppState,
            }}
        >
            <div className='application'>
                <ProductPage />
            </div>
        </AppContextProvider>
    );
};

export default App;
