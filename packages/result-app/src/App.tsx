import { BrowserRouter as Router } from 'react-router-dom';

import MainRoutes from './routes/MainRoutes';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
    return (
        <Router>
            <MainRoutes />
        </Router>
    );
}

export default App;
