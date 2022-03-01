<template>
  <div class="hello">
    <Searcher />
    <MemberDetails />
    <MemberList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Searcher from '@/components/Searcher.vue';
import MemberDetails from '@/components/MemberDetails.vue';
import MemberList from './components/MemberList.vue';

export default defineComponent({
  components: {
    MemberDetails,
    MemberList,
    Searcher,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
