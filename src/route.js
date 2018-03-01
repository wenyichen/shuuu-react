import Main from './Main';
import Start from './Start';
import Signup from './Signup';
import Login from './Login';
import InfoRider from './Info-Rider';
import InfoDriver from './Info-Driver';
import Account from './Account';
import Account_Edit from './Account_Edit';

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
    path: '/info/riders',
    component: InfoRider,
},
{
    path: '/info/drivers',
    component: InfoDriver,
},
{
    path: '/Account',
    component: Account,
},
{
    path: '/Account_Edit',
    component: Account_Edit,
}
]

export default routes;
