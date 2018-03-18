import Main from './Main';
import Start from './Start';
import Signup from './Signup';
import Search from './Search';
import Login from './Login';
import InfoRider from './Info-Rider';
import InfoDriver from './Info-Driver';
import Account from './Account';
import Account_Edit from './Account_Edit';
import Trips from './Trips';

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
