import { createRouter, createWebHistory  } from 'vue-router'
import HomeDetail from './pages/info/home.vue'
import AboutDetail from './pages/info/about.vue'
import GalleryDetail from './pages/info/gallery.vue'
import ContactDetail from './pages/contact/contact.vue'
import AchievementDetail from './pages/contact/achievement.vue'
import Registration from './registration/register.vue'
import NotFound from './pages/NotFound.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: HomeDetail },
    { path: '/about', component: AboutDetail, children: [
      { path: 'events', component: AboutDetail }
    ]},
    { path: '/gallery', component: GalleryDetail},
    { path: '/contact', component: ContactDetail},
    { path: '/achievement', component: AchievementDetail},
    {path: '/register', component: Registration},
    { path: '/:notFound(.*)', component: NotFound}
  ]
})