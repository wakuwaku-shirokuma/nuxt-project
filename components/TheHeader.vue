<template>
  <header class="site-header">
    <div class="wrapper site-header-wrapper">
      <div class="site-header-start">
        <NuxtLink to="/" class="brand">Brand</NuxtLink>
      </div>
      <div class="site-header-middle">
        <nav class="nav">
          <button 
            class="nav-toggle" 
            :aria-expanded="String(navExpanded)"
            type="button"
            @click="toggleNav"
          >
            menu
          </button>
          <ul class="nav-wrapper" :class="{ active: navExpanded }">
            <li class="nav-item"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/about">About</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/services">Services</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/inquires">Inquires</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <div class="site-header-end">
        <NuxtLink class="button" to="/signin">Sign in</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Nuxt 3のコンポーネント自動インポートに最適化
const navExpanded = ref<boolean>(false)

const toggleNav = (): void => {
  navExpanded.value = !navExpanded.value
}

// ルート監視
const route = useRoute()
watch(() => route.path, () => {
  navExpanded.value = false
})
</script>

<style scoped>
.site-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.site-header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
}

.site-header-start .brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.site-header-middle {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-wrapper {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-item a:hover {
  color: #007bff;
}

.site-header-end .button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.site-header-end .button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  
  .nav-wrapper {
    display: none;
  }
}

.nav-wrapper.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>