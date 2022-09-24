<template>
  <html>
    <body>
      <header class="header">
        <div class="header__wrapper">
          <NuxtLink class="header__logo" to="/">
            <img
              src="@/assets/img/logo 2.svg"
              alt="Логотип"
              width="121"
              height="33"
            />
          </NuxtLink>
          <h1 class="header__info">Календарь врача</h1>
        </div>
      </header>
      <NuxtPage />
      <div id="teleport-target"></div>
    </body>
  </html>
</template>

<script setup>
</script>
