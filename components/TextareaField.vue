<template>
  <div class="field-group">
    <label :for="id" class="label">{{ label }}</label>
    <textarea 
      :id="id" 
      :name="name" 
      :required="required" 
      :rows="rows"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      class="textarea" 
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  name: string;
  label: string;
  rows?: number;
  required?: boolean;
  modelValue?: string;
}

withDefaults(defineProps<Props>(), {
  rows: 5,
  required: false,
  modelValue: ''
});

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<style scoped src="~/assets/css/inquires.css"></style>