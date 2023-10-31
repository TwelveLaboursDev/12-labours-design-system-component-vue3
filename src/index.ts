import BreadcrumbTrail from './components/BreadcrumbTrail.vue';
import TabNav from './components/TabNav.vue';
import Pagination from './components/Pagination.vue';
import PaginationMenu from './components/PaginationMenu.vue';
import CarouselCard from './components/CarouselCard.vue';

import type { App } from 'vue'

const components = [
  BreadcrumbTrail,
  TabNav,
  Pagination,
  PaginationMenu,
  CarouselCard,
]

export function install(app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}