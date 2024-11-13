<template>
  <svg
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :class="svgClass"
      :style="{ width: size, height: size }"
  >
    <path
        d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1
      4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"
        fill="url(#gradient)"
    />
    <path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997
      6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="url(#gradient)"/>
    <path d="M10.72 14.53V9.47005C10.72 8.99005 10.52 8.80005 10.01 8.80005H8.71C8.2 8.80005 8 8.99005 8 9.47005V14.53C8 15.01 8.2 15.2
      8.71 15.2H10C10.52 15.2 10.72 15.01 10.72 14.53Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="url(#gradient)"/>
    <path d="M16 14.53V9.47005C16 8.99005 15.8 8.80005 15.29 8.80005H14C13.49 8.80005 13.29 8.99005 13.29 9.47005V14.53C13.29 15.01 13.49
      15.2 14 15.2H15.29C15.8 15.2 16 15.01 16 14.53Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="url(#gradient)"/>
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