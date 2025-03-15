import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Docs from '@/views/Docs.vue'
import Blog from '@/views/Blog.vue'
import Changelog from '@/views/Changelog.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/docs', name: 'docs', component: Docs },
    { path: '/changelog', name: 'changelog', component: Changelog },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router