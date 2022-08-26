<template>
  <div>
    <iframe
        src="https://obstbau-rech.de/"
        height="800"
        width="1200"
        title="description"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: 'AboutMe'
})
export default class Projects extends Vue {

}
</script>