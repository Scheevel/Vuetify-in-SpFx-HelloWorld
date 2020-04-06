<template>
  <div class="crudgrid">
    <v-toolbar>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px" @keydown.esc="close" @keydown.enter="save">
        <v-btn v-if="canAdd" slot="activator" color="primary" class="mb-2">New Item</v-btn>
        <v-card>
            <v-card-title>
            <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
            <v-container grid-list-md>
                <v-layout wrap>

                <v-flex v-for="header in headers" :key="header.value" xs12 sm6 md4>
                    <v-text-field 
                                v-model="editedItem[header.value]"
                                :label="header.text" 
                                v-validate="header.validation" 
                                :data-vv-name="header.value"
                                :error-messages="errors.collect(header.value)">                      
                    </v-text-field>
                </v-flex>
                </v-layout>
            </v-container>
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="rows">

        <template slot="items" slot-scope="props">
            <td v-for="header in headers" :key="xkey" :class="header.align == 'left' ? 'text-xs-left' : 'text-xs-right'">
                {{ props.item[header.value] }}
            </td>
            <td class="justify-center layout px-0">
                <v-icon v-if="canEdit" small class="mr-2" @click="editItem(props.item)">
                    edit
                </v-icon>
                <v-icon v-if="canDelete" small @click="deleteItem(props.item)">
                    delete
                </v-icon>
            </td>
        </template>
        <template slot="no-data">
            <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
    </v-data-table>
    <confirm ref="confirm"></confirm>
  </div>
</template>

<script lang=ts>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import confirm from './Confirm.vue';

@Component
export default class Grid extends Vue {
    name: 'grid'
    @Prop()
    title: String
    @Prop()
    headers: Array<any>
    @Prop()
    rows: Array<any>
    @Prop()
    canEdit: Boolean
    @Prop()
    canDelete: Boolean
    @Prop()
    canAdd: Boolean
  
    private dialog: boolean = false //are we showing the edit/new record dialog?
    private editedIndex: number = -1 //Current record in edit
    private editedItem: object = { 
        //Copy of information to be edited in the edit/new dialog
    }
    private defaultItem: object = { 
        //Copy defaults for a new item
    }
  
    get formTitle (): string {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }

    public initialize ( editItem=this.editItem ): void {
      // Create defaultItem based on header information

      this.headers.forEach(header => {
          this.defaultItem[header.value] = header.hasOwnProperty('default') ? header.default : ''
        })

      // Copy header information to standard editedItem
      this.editItem = (<any>Object).assign(this.editItem, this.defaultItem);
      console.log('can add:  ' + this.canAdd)
      console.log('can edit: ' + this.canEdit) 
    }

    @Watch('dialog')
    public changeDialog (val): void {
      val || this.close()
    }

    public close (): void {
      this.dialog = false;
      /*
      setTimeout(() => {
        this.editedItem = (<any>Object).assign({}, this.defaultItem);
        this.editedIndex = -1
      }, 300)
      */
    }

    public created (): void {
        this.initialize()
    }

    editItem (item) {
      console.log('Edit: ' + item)
      this.editedIndex = this.rows.indexOf(item)
      console.log('Edit Index: ' + this.editedIndex)
      this.editedItem = (<any>Object).assign({}, item)
      console.log('Edited Item: ' + this.editedItem)
      this.dialog = true
    }

    async deleteItem (item) {
      const index = this.rows.indexOf(item)
      this.$refs.confirm.open('Delete', 'Are you sure?', {color: 'red', textOK: 'Delete'}).then( (confirm) => {
        console.log(`Received from confirm dialog: ${confirm}`)
        if (confirm) this.rows.splice(index, 1)
      })
    }
    
    async save () {  
      console.log("save() called")
      //let valid = await this.$validator.validateAll()
      //console.log("Form valid: " + valid)
      //if (!valid) 
        //return
      console.log("Edited Index: " + this.editedIndex)
      if (this.editedIndex > -1) {
        //console.log('Original name: ' + this.rows[this.editedIndex].name + ' ' + this.rows[this.editedIndex].calories)
        //console.log('Edited name: ' + this.editedItem.name + ' ' + this.editedItem.calories)
        //this.editedItem.calories = 2323
        //(<any>Object).assign(this.rows[this.editedIndex], this.editedItem)
      } else {
        this.rows.push(this.editedItem)
      }
      this.close()
    }
}
</script>