<template>
  <q-item tag="label" v-ripple>
    <q-select
      borderless
      stack-label
      emit-value
      map-options
      class="full-width"
      v-model="model"
      :options="options"
      :label="name"
    />
  </q-item>
</template>

<script>
import { getNestedField } from "./getNestedField";
export default {
  name: "DropDownSetting",
  props: {
    name: String,
    fieldName: String,
    internalOptions: Array,
    optionPrefix: String,
    optionCountField: String,
    externalOptionsMap: Object,
  },
  data() {
    return {
      dropDownSettingModel: {},
    };
  },
  mounted() {
    console.log(`fieldName: ${JSON.stringify(this.fieldName)}`);
    this.dropDownSettingModel = this.fieldName;
  },
  computed: {
    options: {
      get: function () {
        /*console.log(
          `DropDownSetting get function ${JSON.stringify(this.internalOptions)}`
        );*/
        if (this.optionCountField && this.optionPrefix) {
          // if options are dynamically based on another field
          let arr = [];
          let count = 0;
          const fieldValue = this.getNestedField(this.optionCountField, null);
          while (count < fieldValue) {
            arr.push({
              label: `${this.optionPrefix}${count + 1}`,
              value: `${this.optionPrefix}${count + 1}`,
            });
            count++;
          }
          return arr;
        }
        // if options care retrieved from DB
        if (!this.internalOptions) {
          //const fieldOptions = this.externalOptionsMap[this.fieldName];
          if (!fieldOptions) {
            this.$q.notify({
              message: `Unable retrieve options for ${this.name}`,
              color: "red",
              position: "bottom-right",
            });
          }
          return fieldOptions ?? [];
        }

        // if options are static
        return this.internalOptions;
      },
    },
    model: {
      get: function () {
        //return this.getNestedField(this.fieldName, null);
        return this.dropDownSettingModel;
      },
      set: function (newModel) {
        this.dropDownSettingModel = newModel;
      },
    },
  },
  methods: {
    getNestedField,
  },
};
</script>
