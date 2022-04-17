<template>
  <q-item tag="label" v-ripple>
    <q-popup-edit
      v-model="editedModel"
      @before-show="onFieldClick"
      @save="setValue"
      :cover="false"
      fit
      buttons
    >
      <template v-slot:title>
        <div class="text-mono">{{ name }}</div>
      </template>
      <q-select
        dense
        autofocus
        emit-value
        v-model="editedModel"
        multiple
        :options="options"
        counter
      />
    </q-popup-edit>
    <q-item-section>
      <q-item-label class="text-mono">{{ name }}</q-item-label>
      <q-item-label caption>{{ description }}</q-item-label>
      <q-item-label caption>{{ model }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { getNestedField } from "./getNestedField";
export default {
  name: "MultiDropDownSetting",
  props: {
    name: String,
    description: String,
    fieldName: String,
    internalOptions: Array,
    optionPrefix: String,
    optionCountField: String,
    multipleOptions: Boolean,
    externalOptionsMap: Object,
  },
  data() {
    return {
      editedModel: null,
    };
  },
  computed: {
    options: {
      get: function () {
        // if options is retrieved from DB
        if (!this.internalOptions) {
          const fieldOptions = this.externalOptionsMap[this.fieldName];
          if (!fieldOptions) {
            this.$q.notify({
              message: `Unable retrieve options for ${this.name}`,
              color: "red",
              position: "bottom-right",
            });
          }
          return fieldOptions ?? [];
        }

        // if options is static
        if (!this.optionCountField && !this.optionPrefix) {
          return this.internalOptions;
        }

        // if options is dynamically based on another field
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
      },
    },
    model: {
      get: function () {
        return this.getNestedField(this.fieldName, this.getData());
      },
      set: function (newModel) {
        console.log(`MultiDropDownSetting.setter() newModel: ${newModel}`);
      },
    },
  },
  methods: {
    getNestedField,
    getData() {
      return [];
    },
    onFieldClick() {
      this.editedModel =
        this.model && this.model != "-" ? this.model.split(",") : [];
    },
    setValue(newVal) {
      let updates = "-";
      if (newVal.length > 0) {
        updates = newVal.join(",");
      }
      this.model = updates;
    },
  },
};
</script>
