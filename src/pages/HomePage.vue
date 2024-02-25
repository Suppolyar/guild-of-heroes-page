<template>
  <div
    class="h-screen w-screen bg-guild-of-heroes bg-cover bg-center bg-no-repeat"
  >
    <div
      class="flex h-full flex-col items-center justify-center gap-10 text-lg"
    >
      <MainLogo />
      <InfoBlock>
        Игра больше не публикуется на площадке. Если вы играли в проект ранее,
        перейдите на сайт разработчика и авторизуйтесь, чтобы сохранить своего
        персонажа
        <br />
        Нажимая "Перейти" вы соглашаетесь с передачей ваших данных компании
        MY.GAMES B.V. и их обработкой согласно Политике конфиденциальности
        портала MY.GAMES
      </InfoBlock>
      <BaseButton />
      <InfoBlock>
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
