
import { Main,SecondPage } from "../../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../../pages/Header/Header'
const App = () => {
    return (<>
        <BrowserRouter>
            <Header />
            <Routes>

                <Route path="/" element={<Main />} />
                <Route path="/second-page" element={<SecondPage />} />

            </Routes>
        </BrowserRouter>

    </>

    );
};

export default App;