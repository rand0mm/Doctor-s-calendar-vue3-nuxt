

<script setup>
import { useEmployesStore } from "@/store/employes";
import {
  getCurrentMonth,
  formatDate,
  hoursFormat,
  changeDate,
} from "@/helpers/getDaysData";

// дробление строки по парно '01, 02, 03'
function strToArr(str) {
  return str.match(/.{1,2}/g) || [];
}

const route = useRoute();
const employers = ref(null);
const emptyArr = ref([]);
const newEmployer = ref(null);
const isAdded = ref(false);
const employesStore = useEmployesStore();
const employerslData = computed(() => employesStore.getEmployes);

// for render
const curWeek = computed({
  get() {
    return employesStore.getWeek || 0;
  },
  set(value) {
    employesStore.curWeek = value;
  },
});
const curDay = computed({
  get() {
    return employesStore.getDay || 0;
  },
  set(value) {
    employesStore.curDay = value;
  },
});
const currentMonth = computed({
  get() {
    return employesStore.getMonth || getCurrentMonth();
  },
  set(value) {
    employesStore.curMonth = value;
  },
});
// id первого дня текущей недели
const first = computed({
  get() {
    return employesStore.getFirst || formatDate(currentMonth.value[curWeek.value][0], true);
  },
  set(value) {
    employesStore.curFirst = value;
  },
});
const currentWeekRender = computed(() => {
  let newWeek = [];
  let lengthEmpty = 7 - newWeek.length;
  if (lengthEmpty > 0) {
    for (let j = 0; j < lengthEmpty; j++) {
      let newDate = changeDate(first.value, 7 - lengthEmpty + j, true);
      newWeek.push({ date: newDate, active: "", start: "" });
    }
  }
  return newWeek;
});

watch(
  [employerslData, curDay, curWeek],
  () => {
    let data = JSON.parse(JSON.stringify(employerslData.value.employes)); // ...
    // обновляем данные по работника и вычисляем не занятые часы
    let test = "000102030405060708091011121314151617181920212223";
    let sumStr = "";
    employers.value = data
      ? data.map((i) => {
          // берем за текущий день
          let curDayData = i.data.find(
            (j) =>
              j.date ===
              formatDate(currentMonth.value[curWeek.value][curDay.value], true)
          );
          i.data = curDayData ? curDayData.active : "";
          sumStr += i.data;
          return i;
        })
      : [];
    sumStr = new Set(strToArr(sumStr)); // после сложения всех строк берем только уникальные часы
    emptyArr.value = strToArr(test).filter((i) => {
      return !sumStr.has(i);
    }); // массив неактивных часов
    console.log("Данные по текущему дню", employers.value);
    console.log("Строка неактивных часов", emptyArr.value);
  },
  { deep: true }
);

const isEmpty = (hour) => {
  return emptyArr.value.includes(hoursFormat(hour - 1));
};

const changeCurDay = (newValue) => {
  if (newValue < 0 || newValue > 6) {
    let newWeek = newValue < 0 ? curWeek.value - 1 : curWeek.value + 1;
    if (newWeek < 0 || newWeek > 3) {
      currentMonth.value = getCurrentMonth(newWeek); // обновить текущий месяц
      curWeek.value = newWeek < 0 ? 3 : 0;
    } else {
      curWeek.value = newWeek;
    }
    curDay.value = 0;
    first.value = formatDate(currentMonth.value[curWeek.value][0], true);
    return;
  }
  curDay.value = newValue;
  first.value = formatDate(currentMonth.value[curWeek.value][0], true);
};

const addNewEmployer = () => {
  if (newEmployer.value) {
    employesStore.data.employes.push({
      id: employesStore.data.newEmployId,
      name: newEmployer.value,
      data: [],
    });
    employesStore.data.newEmployId += 1;
    localStorage.setItem("employes", JSON.stringify(employesStore.data));
    newEmployer.value = null;
    isAdded.value = true;
    setTimeout(() => {
      isAdded.value = false;
    }, 2000);
  }
};

employesStore.getLocal();
</script>
    
    
<template>
  <main class="content container">
    <div class="content__add add">
      <label class="add__label" for="add">
        <input
          class="add__input"
          type="text"
          name="add"
          placeholder="Введите ФИО работника"
          v-model="newEmployer"
        />
      </label>
      <button class="add__btn" @click.prevent="addNewEmployer()">
        <span v-if="isAdded"> Сотрудник добавлен </span>
        <span v-else> Добавить нового сотрудника </span>
      </button>
    </div>
    <div class="content__top">
      <div class="data-navbar">
        <button
          class="data-navbar__btn data-navbar__btn--prev"
          @click.prevent="changeCurDay(curDay - 7)"
        ></button>
        <ul class="data-navbar__list">
          <li
            class="data-navbar__item"
            v-for="(day, index) in currentWeekRender"
            :key="index"
          >
            <button
              class="data-navbar__item-btn"
              :class="{ 'data-navbar__item-btn--chosen': curDay === index }"
              @click.prevent="changeCurDay(index)"
            >
              <div class="data-navbar__date">
                {{ formatDate(currentMonth[curWeek][index]) }}
              </div>
              <div class="data-navbar__weekday">
                {{ employesStore.weekDays[index].title }}
              </div>
            </button>
          </li>
        </ul>
        <button
          class="data-navbar__btn data-navbar__btn--next"
          @click.prevent="changeCurDay(curDay + 7)"
        ></button>
      </div>
    </div>
    <section class="table">
      <div class="table__row table__row--main table__row--border">
        <div class="table__name"></div>
        <div class="table__hours">
          <div
            class="table__hour"
            v-for="hour in 24"
            :key="hour"
            :class="{ 'table__hour--empty': isEmpty(hour) }"
          >
            {{ hoursFormat(hour - 1) }}
          </div>
        </div>
      </div>
      <nuxt-link
        class="table__row table__row--main table__row--border table__row--hover"
        v-for="row in employers"
        :key="row.id"
        :to="'/Doctor-s-calendar-vue3-nuxt/user/' + row.id"
      >
        <div class="table__name">{{ row.name }}</div>
        <div class="table__hours table__hours--border">
          <div
            class="table__hour table__hour--main"
            v-for="hour in 24"
            :key="hour"
            :class="{
              'table__hour--fill': strToArr(row.data).includes(
                hoursFormat(hour - 1)
              ),
            }"
          ></div>
        </div>
      </nuxt-link>
    </section>
  </main>
</template>