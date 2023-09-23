<template>
 <div class="sidebar__wrapper">
    <label class="sidebar__label" for="searh-input">Поиск сотрудников</label>
    <input
      class="sidebar__input"
      id="search-input"
      type="text"
      placeholder="Введите Id или имя "
      v-model.trim="searchQuery"
    />
    <div class="sidebar__label">Результаты</div>
    <pre-loader v-if="isLoading"></pre-loader>
    <div v-else class="sidebar__list">
      <div v-if="searchResults && searchResults.length">
        <div v-for="result in searchResults" :key="result.name + Math.random()">
          <preview-card :cardData="result"> </preview-card>
        </div>
      </div>
      <p v-else>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import PreviewCard from './PreviewCard.vue';
import PreLoader from "./PreLoader.vue";

export default {
  name: "Sidebar",
  components: {
   PreviewCard,
   PreLoader,
  },
  async setup() {
   const store = useStore();
   const searchQuery = ref('');
   const isLoading = ref(false);
   const message = ref("начните поиск");
   const searchResults = computed(() => store.state.searchResults);
   const unselectCard = () => {
     store.commit('setSelectedCard', null);
    }

    async function searchUsers() {
      isLoading.value = true;
      unselectCard();
      setTimeout(async () => { //добавляем задержку, чтобы увидеть прелоадер
        const names = searchQuery.value.split(',').map(name => name.trim());;
        try {
          const results = await Promise.all(names.map(name => {
            return fetch(`https://jsonplaceholder.typicode.com/users?q=${name}`)
              .then(response => response.json());
          }));
          message.value = "ничего не найдено";
          store.dispatch('updateResults', results.flat());
          // searchQuery.value = ''; не очищаем input после выведения результатов
        } catch (error) {
          console.error(error);
        }
        isLoading.value = false;
      }, 1500)
      }

  onMounted(() => {
    const inputField = document.querySelector('#search-input');
    inputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      searchUsers();
    }
  });
  })

   return {
    searchQuery,
    searchResults,
    searchUsers,
    isLoading,
    message,
    unselectCard,
   }
  }
}
</script>

<style lang="scss" scoped>
.sidebar__wrapper {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 23px;
  border-radius: 10px;
}
.sidebar__input {
  padding: 16px;
  border-radius: 8px;
  border: 1.5px solid var(--all-colors-gray-gray-200, #e9ecef);
  background: var(--all-colors-black-white-white, #fff);
  outline: none;
}
.sidebar__label {
  color: #333;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
}
.sidebar__list {
  overflow-y: scroll;
  padding: 10px;
}
</style>