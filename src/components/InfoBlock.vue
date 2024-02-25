<template>
  <div class="InfoBlock" :class="setCurrentBlockSize">
    <div class="InfoBlock-line h-[6px] w-full bg-[#A56612]"></div>
    <div
      class="max-w-[580px] border-2 border-[#9E7641] bg-[#E0C094] px-[36px] py-[32px]"
    >
      <slot />
    </div>
    <div class="InfoBlock-line h-[6px] w-full bg-[#A56612]"></div>
  </div>
</template>

<script setup lang="ts">
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
