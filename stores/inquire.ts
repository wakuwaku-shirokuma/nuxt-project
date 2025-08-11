import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'

export interface InquireFormData {
  email: string
  name: string
  message: string
}

export type InquireStep = 'form' | 'confirm' | 'thanks'

export const useInquireStore = defineStore('inquire', () => {
  // State
  const formData = ref<InquireFormData>({
    email: '',
    name: '',
    message: ''
  })

  const step = ref<InquireStep>('form')

  // Actions
  const setFormData = (data: InquireFormData) => {
    formData.value = data
  }

  const updateField = (field: keyof InquireFormData, value: string) => {
    formData.value[field] = value
  }

  const setStep = (newStep: InquireStep) => {
    step.value = newStep
  }

  const resetForm = () => {
    formData.value = {
      email: '',
      name: '',
      message: ''
    }
    step.value = 'form'
  }

  const isFormValid = computed(() => {
    return formData.value.email.length > 0 &&
           formData.value.name.length > 0 &&
           formData.value.message.length > 0
  })

  return {
    // State
    formData: readonly(formData),
    step: readonly(step),
    
    // Getters
    isFormValid,
    
    // Actions
    setFormData,
    updateField,
    setStep,
    resetForm
  }
})