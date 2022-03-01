<template>
  <nav-title><h1 class="title">Members List</h1></nav-title>
  <div class="home">
    <MemberList></MemberList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MemberList from '@/components/MemberList.vue';
import Nav from '@/components/Nav.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MemberList,
    // eslint-disable-next-line vue/no-unused-components
    'nav-title': Nav,
  },
});
</script>
<style>
.title {
  text-align: center;
  padding-top: 2%;
}
</style>
