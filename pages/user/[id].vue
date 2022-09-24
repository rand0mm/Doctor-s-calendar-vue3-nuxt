

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
      <h2 class="content__title">Иванов А. А.</h2>
      <div class="content__tab-link tab-link">
        <ul class="tab-link__list">
          <li class="tab-link__item tab-link__item--active">01.01-07.01</li>
          <li class="tab-link__item">08.01-15.01</li>
          <li class="tab-link__item">16.01-23.01</li>
          <li class="tab-link__item">24.01-31.01</li>
        </ul>
      </div>
    </div>
    <section class="table">
      <div class="table__row" v-for="day in 7" :key="day">
        <div class="table__caption">
          <div class="table__date">{{ numberFormat(day) }}.01</div>
          <div class="table__weekday">
            {{ weekDays[day].title }}
          </div>
        </div>
        <div class="table__hours">
          <div class="table__hour" v-for="hour in 24" :key="hour">
            {{ numberFormat(hour - 1) }}
          </div>
        </div>
      </div>
    </section>
  </main>
</template>