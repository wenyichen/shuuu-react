import Main from './Main';
import Start from './Start';
import Signup from './Signup';
import Login from './Login';
import InfoRider from './Info-Rider';

const routes = [{
    path: '/',
    component: Main,
},
{
    path: '/start',
    component: Start,
},
{
    path: '/signup',
    component: Signup,
},
{
    path: '/login',
    component: Login,
},
{
    path: '/info/rider',
    component: InfoRider,
}
]

export default routes