import { useCallback, useState } from 'react';
import { AppContextProvider, appInitialState } from './context/AppContext';

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
            <div className='application'></div>
        </AppContextProvider>
    );
};

export default App;
