<template>
  <div>
    <video
        ref="videoPlayer"
        class="video-js"
        controls
        preload="auto"
    ></video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, watch } from 'vue';
import videojs from 'video.js';
import '@videojs/http-streaming/dist/videojs-http-streaming.min.js'; // Плагин для HLS
import 'video.js/dist/video-js.css';

const { state, send } = defineProps(['state', 'send']);
const videoPlayer = ref<HTMLVideoElement | null>(null);

const videoJsSetup = {
  autoplay: true,
  controls: false,
  preload: 'auto',
  sources: [
    {
      type: 'application/x-mpegURL',
      src: 'https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8',
    },
  ],
};

onMounted(() => {
  if (videoPlayer.value) {
    const player = videojs(videoPlayer.value, videoJsSetup);

    player.on('play', () => {
      send({ type: 'PLAY' });
    });

    player.on('pause', () => {
      send({ type: 'PAUSE' });
    });

    watch(() => state, (newState) => {
      if (videoPlayer.value) {
        const player = videojs(videoPlayer.value);
        if (newState === 'replaying') {
          player.currentTime(0);
          player.play();
          send({ type: 'PLAY' });
        } else if (newState === 'playing' && player.paused()) {
          player.play();
        } else if (newState === 'paused' && !player.paused()) {
          player.pause();
        }
      }
    });
  }
});

const skipForward = () => {
  if (videoPlayer.value) {
    const player = videojs(videoPlayer.value);
    player.currentTime(player.currentTime() + 5);
  }
};

const skipBackward = () => {
  if (videoPlayer.value) {
    const player = videojs(videoPlayer.value);
    player.currentTime(Math.max(player.currentTime() - 5, 0));
  }
};

defineExpose({
  skipForward,
  skipBackward,
});
</script>





