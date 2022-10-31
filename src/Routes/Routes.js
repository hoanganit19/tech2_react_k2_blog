import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Posts from '../Pages/Posts/Posts';

export const routes = (
    <Routes>
        <Route path='/' end element={<Home />} />
        <Route path='/gioi-thieu' end element={<About />} />
        <Route path='/chuyen-muc/:id' end element={<Posts />} />
    </Routes>
)