<template>
  <svg
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :class="svgClass"
      :style="{ width: size, height: size }"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="url(#gradient)"/>
    <path d="M22 2L13.8 10.2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="url(#gradient)"/>
    <path d="M13 6.17004V11H17.83" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="url(#gradient)"/>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '20px',
    },
    svgClass: {
      type: String,
      default: 'icon',
    },
  },
};
</script>