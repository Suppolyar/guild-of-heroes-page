<template>
  <div class="InfoBlock" :class="setCurrentBlockSize">
    <div class="InfoBlock-line relative h-[6px] w-full bg-[#A56612]">
      <div class="absolute -left-2 -top-1"><InfoBlockElement /></div>
      <div class="absolute -right-2 -top-1"><InfoBlockElement /></div>
    </div>
    <div
      class="max-w-[440px] border-2 border-[#9E7641] bg-[#E0C094] px-[42px] py-[21px]"
    >
      <slot />
    </div>
    <div class="InfoBlock-line relative h-[6px] w-full bg-[#A56612]">
      <div class="absolute -left-2 -top-1"><InfoBlockElement /></div>
      <div class="absolute -right-2 -top-1"><InfoBlockElement /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoBlockElement from "./InfoBlockElement.vue";

defineOptions({
  name: "InfoBlock",
});
const props = defineProps<{
  size: "medium" | "large";
}>();

const setCurrentBlockSize = () => {
  switch (props.size) {
    case "medium":
      return "text-base";
    case "large":
      return "text-lg";
  }
};
</script>

<style scoped></style>
