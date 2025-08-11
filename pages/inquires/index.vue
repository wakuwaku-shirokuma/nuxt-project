<template>
  <div class="container">
    <h1 class="title">お問い合わせ</h1>
    <form @submit.prevent="handleSubmit" class="form">
      <InputField 
        id="email" 
        name="email" 
        label="メールアドレス" 
        type="email" 
        :required="true"
        v-model="email"
      />
      <InputField 
        id="name" 
        name="name" 
        label="お名前" 
        type="text" 
        :required="true"
        v-model="name"
      />
      <TextareaField 
        id="message" 
        name="message" 
        label="お問い合わせ内容" 
        :rows="5" 
        :required="true"
        v-model="message"
      />
      <button type="submit" class="submit-button" :disabled="!inquireStore.isFormValid">
        確認する
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const inquireStore = useInquireStore()

// Computed properties for v-model
const email = computed({
  get: () => inquireStore.formData.email,
  set: (value: string) => inquireStore.updateField('email', value)
})

const name = computed({
  get: () => inquireStore.formData.name,
  set: (value: string) => inquireStore.updateField('name', value)
})

const message = computed({
  get: () => inquireStore.formData.message,
  set: (value: string) => inquireStore.updateField('message', value)
})

const handleSubmit = () => {
  if (!inquireStore.isFormValid) return
  
  inquireStore.setStep('confirm')
  navigateTo('/inquires/confirm')
}

// ページ離脱時にstepをリセット
onBeforeUnmount(() => {
  inquireStore.setStep('form')
})
</script>

<style scoped src="~/assets/css/inquires.css"></style>