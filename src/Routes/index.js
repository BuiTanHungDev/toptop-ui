//  Public Router

import { HeaderOnly } from '@/components/Layouts';
import Following from '@/Pages/Following';
import Home from '@/Pages/Home';
import Profile from '@/Pages/Profile';
import Search from '@/Pages/Search';
import Upload from '@/Pages/Upload';
const publicRouter = [
    { path: '/', component: Home },
    { path: 'following', component: Following },
    { path: 'profile', component: Profile },
    { path: 'upload', component: Upload, layout: HeaderOnly },
    { path: 'search', component: Search, layout: null },



];

const privateRouter = [];

export { publicRouter, privateRouter };
