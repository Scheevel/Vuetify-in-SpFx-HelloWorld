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
import 'vuetify/dist/vuetify.min.css';
import router from './router/index'
import store from './store/index'
Vue.config.productionTip=false;
Vue.use(Vuetify);
const vuetifyOpts = {};
// Importing Vue.js SFC
//import AttemptCrmComponent from './components/AttemptCrm.vue';

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
