<template>
  <div class="field-group">
    <label :for="id" class="label">{{ label }}</label>
    <input 
      :id="id" 
      :name="name" 
      :type="type" 
      :required="required" 
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="input" 
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email';
  required?: boolean;
  modelValue?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  modelValue: ''
});

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<style scoped src="~/assets/css/inquires.css"></style>