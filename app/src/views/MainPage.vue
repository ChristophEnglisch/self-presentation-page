<template>
  <AboutMe id="about"/>
  <Projects id="projects"/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Projects from "@/views/Projects.vue";
import AboutMe from "@/views/AboutMe.vue";


@Options({
  name: 'HomeView',
  components: {Projects, AboutMe}
})
export default class HomeView extends Vue {

  private items = [
    'About Me', 'Projects', 'Blog', 'Skills',
  ]

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  private scrollToElement(element) {
    const el = document.getElementById(element);
    el.scrollIntoView({behavior: "smooth"});
  }
    /*@Watch('tab')
    private onTabChanged(oldVal : any, newVal : any) : void {

    }*/

}
</script>