<template>
  <div class="page" style="height: 100vh; display: flex;">
    <slot name="page"></slot>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options()
export default class Page extends Vue {

}
</script>
<style>
.page {

}
</style>