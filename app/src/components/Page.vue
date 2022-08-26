<template>
  <div class="page">
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
  height: 100vh;
  width: 100%;
}
</style>