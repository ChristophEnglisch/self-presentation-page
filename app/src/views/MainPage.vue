<template>
  <div>
    <Page>
      <template v-slot:page>
        test
      </template>
    </Page>

  <Page>
    <template v-slot:page>
      <AboutMe id="about"/>
    </template>
  </Page>

  <Projects id="projects"></Projects>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Projects from "@/views/Projects.vue";
import AboutMe from "@/views/AboutMe.vue";
import Page from "@/components/Page.vue";

@Options({
  name: 'MainPage',
  components: {Page, Projects, AboutMe},
})
export default class MainPage extends Vue {}
</script>
