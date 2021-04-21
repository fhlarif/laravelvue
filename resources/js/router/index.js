import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';


export default {
    mode: 'history',
    linkActiveClass: 'bg-blue-100 border rounded-full px-1 text-pink-800',
    routes: [
        {
            path: '/',
            name:'home',
            component: Home
        },
        {
            path: '/about',
            name:'page.about',
            component: About
        },
        {
            path: '/contact',
            name:'page.contact',
            component: Contact
        },
        {
            path: '/notes/create',
            name:'notes.create',
            component: require('../views/notes/Create.vue')
        }
    ]
}
