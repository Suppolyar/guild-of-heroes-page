<template>
  <div
    class="relative h-screen w-screen overflow-hidden bg-guild-of-heroes bg-cover bg-center bg-no-repeat"
  >
    <MyGamesLogo class="absolute right-[80px] top-[80px]" />
    <div
      class="flex h-full flex-col items-center justify-center gap-5 py-20 text-lg 2xl:gap-10"
    >
      <MainLogo />
      <BaseButton />
      <InfoBlock size="medium">
        Скачивая MY.GAMES Launcher вы соглашаетесь с передачей ваших данных
        компании MY.GAMES B.V. и их обработкой согласно Политике
        конфиденциальности портала MY.GAMES
      </InfoBlock>
    </div>
    <BaseFooter class="absolute bottom-0 w-full" />
  </div>
</template>

<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import MainLogo from "../assets/main-logo.vue";
import BaseButton from "../components/BaseButton.vue";
import InfoBlock from "../components/InfoBlock.vue";
import MyGamesLogo from "../assets/my-games-logo.vue";
import BaseFooter from "../components/footer/BaseFooter.vue";
const title = useTitle();
title.value = "Guilds Of Heroes";
</script>

<style scoped></style>
