<template>
  <html>
    <body>
      <header class="header">
        <div class="header__wrapper">
          <NuxtLink class="header__logo" to="/Doctor-s-calendar-vue3-nuxt/">
            <img
              src="@/assets/img/logo2.svg"
              alt="Логотип"
              width="121"
              height="33"
            />
          </NuxtLink>
          <h1 class="header__info">Календарь&nbsp;врача</h1>
        </div>
      </header>
      <NuxtPage />
      <div id="teleport-target"></div>
    </body>
  </html>
</template>

<script setup>
import { useEmployesStore } from "@/store/employes";

const employesStore = useEmployesStore();
employesStore.fetchData();
</script>
