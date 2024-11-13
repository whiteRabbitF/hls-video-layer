<template>
  <a-modal
      v-model:open="isVisible"
      title="PLAYER"
      :width="modalWidth"
      :height="modalHeight"
      @cancel="close"
      class="player-modal"
  >
    <VideoPlayer
        :state="snapshot.value"
        :send="send"
        ref="videoPlayerComponent"
        :width="modalWidth"
        :height="modalHeight"
    />
    <template #footer>
      <a-button
          key="replay"
          class="video-button"
          @click="replayVideo"
          title="Перемотать в начало">
        <ReplayIcon />
      </a-button>

      <a-button
          key="skip-back"
          class="video-button"
          @click="skipBackward"
          title="Перемотать на 5 секунд вперед">
        <SkipBackIcon />
      </a-button>

      <a-button
          key="skip-forward"
          class="video-button"
          @click="skipForward"
          title="Перемотать на 5 секунд назад">
        <SkipForwardIcon />
      </a-button>

      <a-button
          key="close"
          class="video-button"
          @click="close"
          title="Закрыть">
        <CollapseIcon />
      </a-button>

      <a-button
          v-if="modalWidth === '35vw'"
          key="increase-size"
          class="video-button"
          @click="increaseSize"
          title="Увеличить экран">
        <ExpandIcon />
      </a-button>

      <a-button
          v-if="modalWidth === '50vw'"
          key="decrease-size"
          class="video-button"
          @click="decreaseSize"
          title="Уменьшить экран">
        <CompressIcon />
      </a-button>

      <a-button
          v-if="snapshot.value !== 'playing'"
          key="play"
          class="video-button"
          @click="playVideo"
          title="Воспроизвести">
        <PlayIcon />
      </a-button>

      <a-button
          v-if="snapshot.value !== 'paused'"
          key="pause"
          class="video-button"
          @click="pauseVideo"
          title="Остановить">
        <PauseIcon />
      </a-button>
    </template>
  </a-modal>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import { useMachine } from '@xstate/vue';
import { videoPlayerMachine } from '../machines/videoPlayerMachine.ts';
import VideoPlayer from "./VideoPlayer.vue";
import PlayIcon from "@/assets/Icons/PlayIcon.vue";
import PauseIcon from "@/assets/Icons/PauseIcon.vue";
import ExpandIcon from "@/assets/Icons/ExpandIcon.vue";
import CompressIcon from "@/assets/Icons/CompressIcon.vue";
import CollapseIcon from "@/assets/Icons/CollapseIcon.vue";
import ReplayIcon from "@/assets/Icons/ReplayIcon.vue";
import SkipBackIcon from "@/assets/Icons/SkipBackIcon.vue";
import SkipForwardIcon from "@/assets/Icons/SkipForwardIcon.vue";

const { snapshot, send } = useMachine(videoPlayerMachine);
const isVisible = ref(false);
const videoPlayerComponent = ref(null);

const modalWidth = ref('50vw');
const modalHeight = ref('50vh');
const open = () => {
  isVisible.value = true;
};
const close = () => {
  isVisible.value = false;
};

const increaseSize = () => {
  modalWidth.value = '50vw';
  modalHeight.value = '50vh';
};
const decreaseSize = () => {
  modalWidth.value = '35vw';
  modalHeight.value = '35vh';
};

const playVideo = () => {
  send({ type: 'PLAY' });
};
const pauseVideo = () => {
  send({ type: 'PAUSE' });
};
const replayVideo = () => {
  send({ type: 'REPLAY' });
};

const skipForward = () => {
  videoPlayerComponent.value?.skipForward();
};

const skipBackward = () => {
  videoPlayerComponent.value?.skipBackward();
};

defineExpose({
  open, close
});
</script>


<style lang="scss">
.video-js {
  height: 430px;
  width: 100%;
}
.player-modal {
  min-width: 400px;
   .ant-modal-header {
      border-bottom: var(--thin-border);
    }
    .ant-modal-content {
      height: 100%;
    }
    .ant-modal-body {
      height: calc(100% - 100px);
      padding: 15px;
    }
    .ant-modal-footer {
        border-top: var(--thin-border);
      }
    .video-button {
      transition: all 0.3s ease;
      background-color: var(--btn-bk-color);
      border: none;
      border-radius: 5px;
      margin-top: 10px;

      &:hover {
        background-color: var(--btn-hover);
      }

      &:focus {
        outline: none;
      }
    }
}
</style>






