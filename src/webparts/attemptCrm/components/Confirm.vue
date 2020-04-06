<template>
  <v-dialog v-model="dialog" persistent max-width="290" @keydown.esc="cancel" @keydown.enter="agree">
    <v-card>
      <v-toolbar dark :color="options.color" dense flat>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message">{{ message }}</v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" flat="flat" @click.native="agree">{{options.textOK}}</v-btn>
        <v-btn color="grey" flat="flat" @click.native="cancel">{{options.textCancel}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Confirm extends Vue {
  private dialog: boolean = false;
  private resolve: any = null;
  private reject: any = null;
  private message: string = null;
  private title: string = null;
  private options: object = {
    color: 'primary',
    textOK: "OK",
    textCancel: "Cancel",
  }

  public open(title, message, options): Promise<any> {
    this.dialog = true
    this.title = title
    this.message = message
    this.options = (<any>Object).assign(this.options, options)
    return new Promise((resolve: any, reject: any) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  public agree(): void {
    this.resolve(true)
    this.dialog = false
  }

  public cancel() {
    this.resolve(false)
    this.dialog = false
  }
}  


</script>
