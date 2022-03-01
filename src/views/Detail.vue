<template>
  <div class="profileImg">
    <img class="profileImg" :src="`${member.avatar_url}`" />
  </div>
  <div v-if="member">
    <h1>{{ member.login }}</h1>
    <h2>{{ member.followers_url }}</h2>
    <h2>{{ member.type }}</h2>
    <h2>{{ memberList }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Member } from '@/types';
import { RouteLocation } from 'vue-router';
import { memberService } from '@/services/memberService';

export default defineComponent({
  components: {},
  data() {
    return {
      member: {} as Member,
    };
  },
  computed: {
    id() {
      console.log('this1', this.$route);
      return String((this.$route as RouteLocation).params.id);
    },
  },
  async created() {
    memberService.getMember(this.id).then((member: Member | undefined) => {
      if (member) {
        console.log('this2', this);
        this.member = member;
      }
    });
  },
});
</script>
