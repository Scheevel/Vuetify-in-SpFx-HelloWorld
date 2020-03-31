import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'AttemptCrmWebPartStrings';
//import '@mdi/font';

// Importing Vue.js
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
import '../../../node_modules/material-design-icons/iconfont/material-icons.css';
import router from './router/index';
import store from './store/index';
import VueProgressBar from 'vue-progressbar';
Vue.config.productionTip=false;
Vue.use(Vuetify);
Vue.use(VueRouter);
const vuetifyOpts = {};
// Importing Vue.js SFC
//import AttemptCrmComponent from './components/AttemptCrm.vue';

const options = {
  color: '#2196f3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.1s',
    opacity: '0.5s',
    termination: 400
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options);

export interface IAttemptCrmWebPartProps {
  description: string;
}

export default class AttemptCrmWebPart extends BaseClientSideWebPart<IAttemptCrmWebPartProps> {

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    let vm = new Vue({
      el: `#${id}`,
      vuetify: new Vuetify(vuetifyOpts),
      router: new VueRouter({}),
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
