import AboutPage from "./pages/About.vue";
import DataGridPage from "./pages/DataGrid.vue";
import SpFxPage from './pages/AttemptCrm.vue';

export const routes = [
  { path: '/about', name: 'About', icon:'mdi-information', component: AboutPage },
  { path: '/datagrid', name: 'Data Grid', icon:'mdi-database', component: DataGridPage }
]
