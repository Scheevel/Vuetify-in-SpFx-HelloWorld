import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'AttemptCrmWebPartStrings';

// Importing Vue.js
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
//import '../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'
import '../../../node_modules/@mdi/font/css/materialdesignicons.css';
Vue.config.productionTip=false;
Vue.use(Vuetify);
Vue.use(VueRouter);
const vuetifyOpts = {};
import AboutComponent from "./components/About.vue";
import SpFxComponent from './components/AttemptCrm.vue';
const routes = [
  { path: '/about', name: 'About', icon:'mdi-information', component: AboutComponent }
]
const AppRouter= new VueRouter({
  routes
});

export interface IAttemptCrmWebPartProps {
  description: string;
}

export default class AttemptCrmWebPart extends BaseClientSideWebPart<IAttemptCrmWebPartProps> {

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    let el = new Vue({
      el: `#${id}`,
      vuetify: new Vuetify(vuetifyOpts),
      router: AppRouter,
      components: {
        SpFxComponent,
        AboutComponent
      },
      render: h => h(App, {
        props: {
          description: this.properties.description
        }
      })
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
