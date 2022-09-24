

<script setup>
let weekDays = {
  1: { title: "Понедельник" },
  2: { title: "Вторник" },
  3: { title: "Среда" },
  4: { title: "Четверг" },
  5: { title: "Пятница" },
  6: { title: "Суббота" },
  7: { title: "Воскресенье" },
};
const numberFormat = (number) => {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};
</script>
    
    
<template>
  <main class="content container">
    <div class="content__top">
      <div class="data-navbar">
        <button class="data-navbar__btn data-navbar__btn--prev"></button>
        <ul class="data-navbar__list">
          <li class="data-navbar__item" v-for="day in 7" :key="day">
            <button class="data-navbar__item-btn">
              <div class="data-navbar__date">{{ numberFormat(day) }}.01</div>
              <div class="data-navbar__weekday">
                {{ weekDays[day].title }}
              </div>
            </button>
          </li>
        </ul>
        <button class="data-navbar__btn data-navbar__btn--next"></button>
      </div>
    </div>
    <section class="table">
      <div class="table__row table__row--main table__row--border">
        <div class="table__name"></div>
        <div class="table__hours">
          <div
            class="table__hour table__hour--main"
            v-for="hour in 24"
            :key="hour"
          >
            {{ numberFormat(hour - 1) }}
          </div>
        </div>
      </div>
      <div
        class="table__row table__row--main table__row--border table__row--hover"
        v-for="row in 24"
        :key="row"
      >
        <div class="table__name">Иванов И.И.</div>
        <div class="table__hours table__hours--border">
          <div
            class="table__hour table__hour--main"
            v-for="hour in 24"
            :key="hour"
          ></div>
        </div>
      </div>
    </section>
  </main>
</template>