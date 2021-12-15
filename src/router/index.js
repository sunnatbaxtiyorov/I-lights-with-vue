import VueRouter from "vue-router"
import AboutCompany from '../pages/AboutCompany'
import Services from '../pages/Services'
import Catalog from '../pages/Catalog'
import Delivery from '../pages/Delivery'
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'

export default new VueRouter({
    routes:[
        {
            path: '/services',
            component:Services
        },
        {
            path: '/contacts',
            component:Contacts
        },
        {
            path: '/',
            component:Home
        },
        {
            path: '/about',
            component:AboutCompany
        },
        {
            path: '/catalog',
            component:Catalog
        },
        {
            path: '/delivery',
            component:Delivery
        },
        {
            path: '/services',
            component:Services
        }
    ]
})