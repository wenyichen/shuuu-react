import Main from './components/Main';
import Start from './components/Start';
import Signup from './components/Signup';
import Search from './components/Search';
import Login from './components/Login';
import InfoRider from './components/Info-Rider';
import InfoDriver from './components/Info-Driver';
import Account from './components/Account';
import Account_Edit from './components/Account_Edit';
import Trips from './components/Trips';

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
    path: '/search',
    component: Search,
},
{
    path: '/login',
    component: Login,
},
{
    path: '/info/riders',
    component: InfoRider,
},
{
    path: '/info/drivers',
    component: InfoDriver,
},
{
    path: '/account',
    component: Account,
},
{
    path: '/account/edit',
    component: Account_Edit,
},
{
    path: '/trips',
    component: Trips,
}
]

export default routes;
