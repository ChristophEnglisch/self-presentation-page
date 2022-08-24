<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list
          dense
          rounded
      >
        <v-list-item
            v-for="page in pages"
            v-bind:key="page.id"
            link
            @click="(page.id)"
        >
          <v-list-item-icon>
            <v-icon>{{page.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{page.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app>
    </v-footer>
  </v-app>
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

  private pages : Array<Pages> = [
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

  private mounted(){
    const scrollHandler = new ScrollHandler(
        new ScrollToHandler({})
    )
  }
}
</script>
