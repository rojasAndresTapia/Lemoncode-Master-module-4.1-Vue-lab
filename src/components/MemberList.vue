<template>
  <div>
    <input class="inputSearch" v-model="value" id="value" />
    <button class="searchButton" @click="handleInput">Search</button>
  </div>
  <table class="table">
    <thead>
      <tr class="tableHead">
        <th>Avatar</th>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tableRow" v-for="member in memberList" :key="member.id">
        <td>
          <router-link :to="`/detail/${member.login}`">
            <img class="profileImg" :src="`${member.avatar_url}`" />
          </router-link>
        </td>
        <td>
          <span>{{ member.id }}</span>
        </td>
        <td>
          <router-link :to="`/detail/${member.login}`">
            <span>{{ member.login }}</span>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { memberService, getMembers } from '@/services/memberService';
import { Member } from '@/types';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    memberList: Member[];
  }
}
export default defineComponent({
  components: {},
  data() {
    return {
      value: 'Lemoncode',
      memberList: [] as Member[],
    };
  },
  methods: {
    handleInput: async function () {
      this.memberList = await getMembers(this.value);
      return this.memberList;
    },
  },
  async created() {
    this.memberList = await memberService.get();
  },
});
</script>

<style>
.inputSearch {
  padding: 10px;
  margin: 10px;
}
.searchButton {
  padding: 10px 20px 10px 20px;
  margin: 10px;
}
.table {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tableRow {
  border: 1px solid grey;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.tableHead {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.profileImg {
  max-width: 150px;
  min-width: 150px;
}
</style>
