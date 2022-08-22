<template>
  <v-container fluid>
    <h1>
      Christoph Englisch,
      Fullstack Webdeveloper
    </h1>
  </v-container>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'

@Options({
  name: 'AboutMe',
})
export default class AboutMe extends Vue {
}
</script>