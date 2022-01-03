import { Route, Routes } from 'react-router';
import Home from './Home';
import Details from './Details';

const CustomRoutes = () => (
    <Routes>
 <Route path="/" element={<Home />} />
 <Route path='/cities/:Name' element={<Details/>}></Route>
    </Routes>
)

export default CustomRoutes;