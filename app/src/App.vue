<template>
  <div v-for="page in pages"
       v-bind:key="page.id"
       @click="scrollToHandler.scrollToElement(page)">
    {{ page.icon }}
    {{ page.name }}
  </div>
  <div id="main">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ScrollHandler from "@/scroll/ScrollHandler";
import ScrollToHandler from "@/scroll/ScrollToHandler";
import {Pages} from "@/model/Pages";

@Options({
  name: 'App',
})
export default class App extends Vue {

  private scrollToHandler = new ScrollToHandler(this.pages)

  private pages: Array<Pages> = [
    {
      id: 'about',
      name: 'About Me',
      icon: 'mdi-forum'
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: 'mdi-forum'
    },
    {
      id: 'blog',
      name: 'Blog',
      icon: 'mdi-forum'
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: 'mdi-forum'
    },
  ]

  private mounted() {
    const scrollHandler = new ScrollHandler(
        new ScrollToHandler(this.pages)
    )
  }
}
</script>