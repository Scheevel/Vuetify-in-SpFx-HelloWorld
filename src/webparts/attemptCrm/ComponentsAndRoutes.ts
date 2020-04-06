import AboutPage from "./pages/About.vue";
//import DataGridPage from "./pages/DataGrid.vue";
import SpFxPage from './pages/AttemptCrm.vue';
import Grid from "./components/Grid.vue";

export const routes = [
  { path: '/about', name: 'About', icon:'mdi-information', component: AboutPage },
  { path: '/datagrid', name: 'Grid', icon:'mdi-database', component: Grid }
]
