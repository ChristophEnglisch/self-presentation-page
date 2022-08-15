<template>
  <v-app v-scroll.self="onScroll">
    <v-navigation-drawer app>
      <v-list
          dense
          rounded
      >
        <v-list-item
            v-for="page in pages"
            v-bind:key="page.id"
            link
            @click="scrollToElement(page.id)"
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

@Options({
  name: 'App',
})
export default class HomeView extends Vue {

  private pages = [
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
  ]

  private scrollToElement(element) {
    const el = document.getElementById(element);
    el.scrollIntoView({behavior: "smooth"});
  }
}
</script>
