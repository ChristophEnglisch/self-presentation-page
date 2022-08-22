<template>
  <div id="test" class="lsdjflksdjfl" v-scrolls style="width: 1000px; height: 1000px">sdfsf</div>
  <AboutMe class="fill-height" id="about"/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Projects from "@/views/Projects.vue";
import AboutMe from "@/views/AboutMe.vue";
import vScrolls from "@/scroll/ScrollDirective";

@Options({
  name: 'MainPage',
  components: {Projects, AboutMe},
  directives: {
    'scrolls' : vScrolls,
  }
})
export default class MainPage extends Vue {

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  created(){
  }

  mounted(){

  }
}
</script>