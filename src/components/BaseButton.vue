<template>
  <button @click="onBtnClick" class="CustomBtn"><span>Скачать</span></button>
</template>

<script setup>
defineOptions({
  name: "BaseButton",
});

const onBtnClick = () => {
  window.__GEM.detectAndDownload(
    "13.2013983",
    "https://static.gc.my.games/HawkedLoader.exe",
  );
};
</script>

<style lang="scss" scoped>
.CustomBtn {
  display: flex;
  padding: 28.858px 76px 29.142px 76px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(
    100deg,
    #f6d621 1.65%,
    #ffe298 15.31%,
    #ffd76d 21.84%,
    #fbcb4c 59.01%,
    #ebb118 88.15%,
    #ffc734 98.56%
  );
  box-shadow: 0px 4px 10.4px 0px rgba(0, 0, 0, 0.4);
  span {
    color: #825805;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
