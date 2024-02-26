<template>
  <div
    class="h-screen w-screen overflow-hidden bg-guild-of-heroes bg-cover bg-center bg-no-repeat"
  >
    <div
      class="flex h-full flex-col items-center justify-center gap-5 py-20 text-lg 2xl:gap-10"
    >
      <MainLogo />
      <InfoBlock size="large">
        Игра больше не публикуется на площадке. Если вы играли в проект ранее,
        перейдите на сайт разработчика и авторизуйтесь, чтобы сохранить своего
        персонажа
        <br />
        <br />
        Нажимая "Перейти" вы соглашаетесь с передачей ваших данных компании
        MY.GAMES B.V. и их обработкой согласно Политике конфиденциальности
        портала MY.GAMES
      </InfoBlock>
      <BaseButton />
      <InfoBlock size="medium">
        Скачивая MY.GAMES Launcher вы соглашаетесь с передачей ваших данных
        компании MY.GAMES B.V. и их обработкой согласно Политике
        конфиденциальности портала MY.GAMES
      </InfoBlock>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainLogo from "../assets/main-logo.vue";
import BaseButton from "../components/BaseButton.vue";
import InfoBlock from "../components/InfoBlock.vue";
</script>

<style scoped></style>
