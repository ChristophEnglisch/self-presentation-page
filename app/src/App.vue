<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list
          dense
          rounded
      >
        <v-list-item
            link
            @click="scrollToElement('about')"
        >
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            link
            @click="scrollToElement('projects')"
        >
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Projekte</v-list-item-title>
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

  private items = [
    'About Me', 'Projects', 'Blog', 'Skills',
  ]

  private scrollToElement(element) {
    const el = document.getElementById(element);
    el.scrollIntoView({behavior: "smooth"});
  }
}
</script>
