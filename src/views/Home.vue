<template>
  <div>
    {{posts}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Get, Call } from "vuex-pathify";

// Types
import { Posts } from "@/types";

@Component({
  components: {},
  filters: {}
})
export default class Home extends Vue {
  @Get("posts/posts") posts!: Posts[];
  @Call("posts/getPosts") getPosts!: () => any;

  // Computed

  // Methods
  onClick(): void {}

  // Lifecycle
  mounted(): void {
    this.getPosts();
  }
}
</script>

