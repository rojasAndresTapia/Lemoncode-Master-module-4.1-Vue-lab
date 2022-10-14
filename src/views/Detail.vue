<template>
  <nav-title><h1 class="title">Member Detail</h1></nav-title>
  <div class="container">
    <div class="profileImg">
      <img class="profileImg" :src="`${member.avatar_url}`" />
    </div>
    <div v-if="member">
      <h1>{{ member.login }}</h1>
      <p>{{ member.company }}</p>
      <p>{{ member.html_url }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Member } from '@/types';
import { RouteLocation } from 'vue-router';
import { userService } from '@/services/memberService';
import Nav from '@/components/Nav.vue';

export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'nav-title': Nav,
  },
  data() {
    return {
      member: {} as Member,
    };
  },
  computed: {
    id() {
      return String((this.$route as RouteLocation).params.id);
    },
  },
  async created() {
    userService.getUser(this.id).then((member: Member | undefined) => {
      if (member) {
        this.member = member;
      }
    });
  },
});
</script>
<style>
.title {
  text-align: center;
  padding-top: 2%;
}
.container {
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
