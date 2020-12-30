import SearchContent from './pages/SearchContent/SearchContent';
import Center from './pages/Center/Center';
import LiveStream from './pages/LiveStream/LiveStream';
import NavMenu from './pages/NavMenu/NavMenu';

const routes = [
    { path: '/', name: 'Home', component: SearchContent },
    { path: '/contents', name: 'Contents', component: SearchContent },
    { path: '/centers', name: 'Centers', component: Center },
    { path: '/livestream', name: 'LiveStream', component: LiveStream },
    { path: '/nav', name: 'NavMenu', component: NavMenu }
];

export default routes;
