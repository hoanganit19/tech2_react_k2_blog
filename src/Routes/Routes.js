import {Routes, Route} from 'react-router-dom';
import Error404 from '../Errors/Error404';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Posts from '../Pages/Posts/Posts';
import PostDetail from '../Pages/Posts/PostDetail';
import Search from '../Pages/Posts/Search';

export const routes = (
    <Routes>
        <Route path='/' end element={<Home />} />
        <Route path='/gioi-thieu' element={<About />} />
        <Route path='/chuyen-muc/:id' element={<Posts />} />
        <Route path='/bai-viet/:slug-:id.html' element={<PostDetail />} />
        <Route path='/tim-kiem' element={<Search />} />
        <Route path='*' element={<Error404 />} />
    </Routes>
)