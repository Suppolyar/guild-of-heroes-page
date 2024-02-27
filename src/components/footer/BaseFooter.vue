<template>
  <footer
    class="bg-footer flex items-center justify-between px-6 py-5 text-center text-white"
  >
    <a href="https://my.games/" target="_blank">
      <MyGamesLogo class="h-[50px] w-[130px]" />
    </a>

    <div>
      <div>© 2024 MY.GAMES HOLDINGS LTD. Published by MY.GAMES B.V.</div>
      <div>
        All rights reserved. All trademarks are the property of their respective
        owners.
      </div>
    </div>

    <Logo18 />
  </footer>
</template>

<script setup>
import MyGamesLogo from "../../assets/my-games-logo.vue";
import Logo18 from "../../assets/18.vue";
</script>

<style></style>
