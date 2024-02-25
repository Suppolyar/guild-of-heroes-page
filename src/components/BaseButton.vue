<template>
  <button
    @click="onBtnClick"
    class="rounded-2xl bg-gradient-to-br from-[#F6D621] via-[#FBCB4C] to-[#FFC734] px-[76px] py-[28px] text-[35px] font-bold text-[#825805] shadow-lg"
  >
    Скачать
  </button>
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

<style lang="scss" scoped></style>
