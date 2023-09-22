<template>
  <div class="card">
    <div class="card__image">
      <img src="../assets/images/Rectangle.jpg" alt="photo" />
    </div>
    <div class="card__wrapper">
      <div class="card__name">{{ name }}</div>
      <div class="card__inner">
        <span class="card__label">email:</span>
        <span class="card__text">{{ email }}</span>
      </div>
      <div class="card__inner">
        <span class="card__label">phone:</span>
        <span class="card__text">{{ phone }}</span>
      </div>
      <div class="card__text">О себе</div>
      <div class="card__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        laudantium commodi tempora aliquid sit omnis voluptas fugit officiis ad
        dolore, ullam praesentium tenetur! Quia iusto perferendis repellat
        repellendus, sint incidunt officia saepe, vel distinctio facere, cum
        sapiente. Dolorum, sed eveniet saepe aperiam, omnis ad debitis, alias a
        recusandae in rem.
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  name: 'CardEmployee',
  props: {name: String, email: String, phone: String}
 }
</script>

<styles lang="scss" scoped>
.card {
  display: grid;
  gap: 15px;
  grid-template-columns: 40% 60%;
  padding: 20px;
}
.card__image {
  // width: 424px;
}
.card__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
}
.card__name {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.card__inner {
  display: flex;
  gap: 10px;
}
.card__label {
  color: #333;
  font-weight: 600;
  line-height: 140%;
}
.card__text {
  line-height: 140%;
}
</styles>
