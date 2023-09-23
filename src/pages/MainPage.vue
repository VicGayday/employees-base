<template>
  <div class="container">
    <div class="main-wrapper">
        <Suspense>
          <Sidebar />
        </Suspense>
      <div class="no-employee-warning" v-if="!selectedCard">
        Выберите сотрудника, чтобы посмотреть его профиль
      </div>
      <div class="employee" v-else-if="selectedCard">
          <card-employee
            :name="selectedCard.name"
            :email="selectedCard.email"
            :phone="selectedCard.phone"
          >
          </card-employee>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Sidebar from "../components/Sidebar.vue"
import CardEmployee from "../components/CardEmployee.vue";
import { useStore } from 'vuex';

export default {
  name: 'MainPage',
  components: {
    Sidebar,
    CardEmployee,
  },
  setup() {
    const store = useStore();
    const selectedCard = computed(() => store.state.selectedCard);

    return {
      selectedCard,
    }
  }
}
</script>

<styles lang="scss" scoped>
  .no-employee-warning {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .employee {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-startt;
}

  aside {
    float: left;
    width: 291px;
  }

  .main-wrapper {
  display: flex;
  border-radius: 10px;
  background: #fdfdfd;
  height: calc(100vh - 115px - 55px);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
</styles>