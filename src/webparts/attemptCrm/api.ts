import Vue from 'vue';
import axios from 'axios';
//import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from "@microsoft/sp-http";

const API_COLUMNS = [
    {
      field: "Title",
      title: "Title",
      width: 80,
      titleAlign: "center",
      columnAlign: "center",
      isEdit: true,
      /*
      formatter: function(rowData, rowIndex, pagingIndex, field) {
        return `<span class='cell-edit-color'>${rowData[field]}</span>`;
      },
      */
      isResize: true
    },
 ];

const URL = 'https://my-json-server.typicode.com/scheevel/fakedata'
const API = axios.create({
  baseURL: URL
})

export const columns = {
  get: params => {return API_COLUMNS}
}

export const testItems = {
  get: params => API.get('/items', {params})
    .then( response => {
      return response.data}), 
  post: (data, params) => API.post('/items', {data}, {params})
};

export const items = {
  get: spRest =>   
    spRest.web.lists.getByTitle('demo - track changes')
    .items.get()
    .then(response => {
        return response
      }),
  update: (spRest, titleValue) => {
    spRest.web.lists.getByTitle('demo - track changes')
    .items.getById(16)
    .update({Title : titleValue })
      .then(response => {
        console.log(response);
      })
  }   
};