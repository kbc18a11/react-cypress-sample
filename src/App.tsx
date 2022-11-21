import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Name } from './page/Name';
import { Names } from './page/Names';

const App = (): JSX.Element =>
    <BrowserRouter>
        <Routes>
            <Route
                path={`/`}
                element={<Names />}
            />
            <Route
                path={`/name/:name`}
                element={<Name />}
            />
        </Routes>
    </BrowserRouter>;

export default App;
