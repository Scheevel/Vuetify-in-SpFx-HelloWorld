<template>
      <v-table
            is-vertical-resize
            :is-loading="isLoading"
            :columns="listColumns"
            :table-data="listItems"
            :show-vertical-border="false"
            :cell-edit-done="cellEditDone"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
    ></v-table>
</template>

<script lang=ts>
import Vue from "vue";
import "vue-easytable/libs/themes-base/index.css";
import { VTable, VPagination } from "vue-easytable";
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

//import { consoleLogProto } from "../api";

export default {
  name: "DataGrid",
  data() {
   return{
      isLoading: true,
      listItems: null,
      listColumns: null,
    }
  },
  methods: {
    async request() {
      this.isLoading = false;
      this.listColumns = await this.$lp.columns.get();
//console.log(this.listColumns);
      this.listItems = await this.$lp.items.get(this.$lp.sp);
//console.log(this.listItems);
    },
     cellEditDone(newValue,oldValue,rowIndex,rowData,field){
        this.listItems[rowIndex][field] = newValue;
        const payload: string = JSON.stringify({
          'Title': newValue,
        });
        this.$lp.items.update(this.$lp.sp, newValue)
        console.log(newValue);
     },
   },    
  created() {
    this.request();
  }
};
</script>