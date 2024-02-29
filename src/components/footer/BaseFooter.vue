<template>
  <footer
    class="fixed bottom-0 left-0 flex h-[50px] w-full items-center justify-between bg-footer px-16 text-center text-white"
  >
    <MyGamesLogo class="h-[20px] w-[88px]" />

    <div class="flex flex-col gap-x-6 text-sm opacity-50 xl:flex-row">
      <div>© 2024 MY.GAMES HOLDINGS LTD. Published by MY.GAMES B.V.</div>
      <div>
        All rights reserved. All trademarks are the property of their respective
        owners.
      </div>
    </div>

    <div class="text-base opacity-50">12+</div>
  </footer>
</template>

<script setup>
import MyGamesLogo from "../../assets/my-games-logo.vue";
</script>

<style></style>
