<template>
  <div>
    <h1>data</h1>
    <!-- ------------
      data grid with configurable capabilities (can-add, can-edit, can-delete)
      headers and rows are binded to our index.js-delivered data items with the ':' 
      attributes. Note that in vue, ":" is short for "bind:"!
    ------------ -->
     
    <grid title="Simple Grid Example" 
        :headers="headers" 
        :rows="rows"> 
    </grid>    
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import grid from '../components/Grid.vue';

@Component
export default class DataGrid extends Vue {
  name: string  = 'DataGrid'
  public headers: Array<object> = [ //header (columns) of our data to show in the grid
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name', 
        default: '',
        validation: 'required|alpha_spaces'
      },
      { text: 'Calories', value: 'calories', default: 0, validation: 'required' },
      { text: 'Fat (g)', value: 'fat', default: 0 },
      { text: 'Carbs (g)', value: 'carbs', default: 0 },
      { text: 'Protein (g)', value: 'protein', default: 0 }
    ];
  public rows: Array<object> = [ //actual row-data of our grid, note that each entry's key should correspond with column's value above
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7
    }];    
}

</script>