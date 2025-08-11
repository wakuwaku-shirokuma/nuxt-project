<template>
  <div class="container">
    <div class="thanks-container">
      <div class="success-icon">
        ✓
      </div>
      <h1 class="title">お問い合わせありがとうございました</h1>
      <p class="thanks-message">
        お問い合わせを受け付けました。<br />
        内容を確認の上、3営業日以内にご返信いたします。
      </p>
      <NuxtLink to="/" class="submit-button back-button" @click="handleBackToTop">
        トップページに戻る
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const inquireStore = useInquireStore()

// ページがマウントされた時の処理
onMounted(() => {
  // 直接このページにアクセスされた場合はトップページにリダイレクト
  if (inquireStore.step !== 'thanks') {
    navigateTo('/')
  }
})

const handleBackToTop = () => {
  // フォームデータをリセット
  inquireStore.resetForm()
}
</script>

<style scoped src="~/assets/css/inquires.css"></style>