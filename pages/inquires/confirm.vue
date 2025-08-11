<template>
  <div class="container">
    <h1 class="title">お問い合わせ内容確認</h1>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="field-group">
        <label class="label">メールアドレス</label>
        <div class="input" style="background-color: #f9f9f9">{{ inquireStore.formData.email }}</div>
      </div>
      <div class="field-group">
        <label class="label">お名前</label>
        <div class="input" style="background-color: #f9f9f9">{{ inquireStore.formData.name }}</div>
      </div>
      <div class="field-group">
        <label class="label">お問い合わせ内容</label>
        <div class="textarea" style="background-color: #f9f9f9; min-height: 120px">{{ inquireStore.formData.message }}</div>
      </div>
      <div class="button-group">
        <button type="button" @click="handleBack" class="submit-button button-secondary">
          戻る
        </button>
        <button type="submit" class="submit-button">送信する</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const inquireStore = useInquireStore()

// ページがマウントされた時にデータの確認
onMounted(() => {
  // フォームデータが空の場合は入力ページにリダイレクト
  if (!inquireStore.isFormValid) {
    navigateTo('/inquires')
  }
})

const handleSubmit = async () => {
  // ここでメール送信の処理を行う
  console.log('送信データ:', inquireStore.formData)
  
  // 送信後はサンクスページにリダイレクト
  inquireStore.setStep('thanks')
  navigateTo('/inquires/thanks')
}

const handleBack = () => {
  inquireStore.setStep('form')
  navigateTo('/inquires')
}
</script>

<style scoped src="~/assets/css/inquires.css"></style>