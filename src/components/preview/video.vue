<template>
  <div
    class="video"
    :class="{ active: isActive }">
    <video
      class="video-source"
      src="https://lmbsy.qq.com/flv/251/221/q0016xntkk5.p202.1.mp4?sdtfrom=v1010&guid=5c5fac63c25d6dc299f943a0560f774c&vkey=76526A26170893114783778AAF669215E0CD99202ED56ABCAAA6FEDB5ED2DF4375DF57EA700EDF46E97CC955311E20336CF082552954E869BF77238A697FE603F570032135911DF384BB29B22BFDAC61241EAB2CD358ACDBDA02CD56BDCBDA7A45C7EA4BC3BCE4DCAB02256780C2DFE3192293A68BDDD6DF" controls="controls">
    </video>
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
    }
  },

  props: {
    isActive: Boolean,
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.video {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }

  .video-source {
    width: 100%;
  }
}

.active {
  border: 1px dashed #38f;
}
</style>
