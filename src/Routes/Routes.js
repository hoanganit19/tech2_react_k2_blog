import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';

export const routes = (
    <Routes>
        <Route path='/' end element={<Home />} />
        <Route path='/gioi-thieu' end element={<About />} />
    </Routes>
)