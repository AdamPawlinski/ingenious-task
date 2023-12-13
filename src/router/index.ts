import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AllStopsList from '../components/AllStopsList.vue';
import StopsList from '../components/StopsList.vue';
import StopsContent from '../components/StopsContent.vue';
import TimesList from '../components/TimesList.vue';
import PageNotFound from '../components/PageNotFound.vue';

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/',  
    component: StopsContent,
    children: [
      {
        path: 'lines/:line',
        name: 'line',
        component: StopsList,
        props: true,
        children: [
          {
            path: ':stop',        
            name: 'time',
            component: TimesList,
            props: true,
          }
        ]
      },
    ]
  },
  { 
    path: '/stops', 
    component: AllStopsList,
  },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
