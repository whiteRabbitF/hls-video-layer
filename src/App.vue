<template>
  <div id="player-app">
    <a-button
        class="play-icon"
        @click="openModal">
      <PlayIcon
          size="65px"
      />
    </a-button>
    <PlayerModal ref="playerModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlayerModal from './components/PlayerModal.vue';
import PlayIcon from "@/assets/Icons/PlayIcon.vue";

const playerModal = ref(null);

const openModal = () => {
  playerModal.value?.open();
};
</script>

<style lang="scss">
#player-app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .play-icon {
    width: 300px;
    height: 140px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    background-image: var(--gradient);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    transition: background 0.3s, scale 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);

    &:active {
      scale: 0.8;
    }
  }
}

</style>



