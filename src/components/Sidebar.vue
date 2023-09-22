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
    <div class="sidebar__list">
      <p v-if="!searchResults">ничего не найдено</p>
      <div v-else-if="searchResults && searchResults.length">
        <div v-for="(result) in searchResults" :key="result.name + Math.random()">
          <card-employee
            :name="result.name"
            :email="result.email"
            :phone="result.phone"
          >
          </card-employee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import CardEmployee from './CardEmployee.vue';

export default {
  name: "Sidebar",
  components: {
   CardEmployee,
  },
  async setup() {
   const store = useStore();
   const searchQuery = ref('');
   const searchResults = computed(() => store.state.searchResults);

    async function searchUsers() {
      const names = searchQuery.value.split(',').map(name => name.trim());;
      try {
        const results = await Promise.all(names.map(name => {
          return fetch(`https://jsonplaceholder.typicode.com/users?q=${name}`)
            .then(response => response.json());
        }));

        store.dispatch('updateResults', results.flat());
        searchQuery.value = '';
      } catch (error) {
        console.error(error);
      }
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
</style>