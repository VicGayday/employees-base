<template>
  <div class="item" @click="selectCard">
    <div class="item__image">
      <img src="../assets/images/small.jpg" alt="avatar" />
    </div>
    <div class="item__inner" :class="{'grey' : selectedCard}">
      <div class="item__username">
        {{ cardData.username }}
      </div>
      <div class="item__email">
        {{ cardData.email }}
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  name: "PreviewCard",
  props: { cardData: Object },
  setup(props) {
    const store = useStore();
    const selectedCard = computed(() => store.state.selectedCard === props.cardData);
    const selectCard = () => {
     store.commit('setSelectedCard', props.cardData);
    }

    return { selectCard, selectedCard }
  }
}
</script>
<styles lang="scss" scoped>

.grey {
  background-color: #E0E0E0;
}

.item {
  display: flex;
  width: 240px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
}

.item__image {
  flex-basis: 70px;
  height: 70px;
  flex-shrink: 0;
  border-right: 1px solid #e0e0e0;
}

.item__image img {
  border-radius: 10px 0 0 10px;
}

.item__inner {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  padding-left: 15px;
  width: 170px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 0px 10px 10px 0px;
}
.item__username {
  color: #333;
  font-weight: 600;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item__email {
  overflow: hidden;
  text-overflow: ellipsis;
}
</styles>
