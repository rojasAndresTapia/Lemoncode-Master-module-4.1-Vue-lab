import axios from 'axios';
import { Member } from '@/types';

export const getMembers = async (companyName: string): Promise<Member[]> => {
  const members = await axios(
    `https://api.github.com/orgs/${companyName}/members`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  ).then((response) => response.data);
  return members;
};

export const memberService = {
  async get(): Promise<Member[]> {
    const members = await axios(
      `https://api.github.com/orgs/Lemoncode/members`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    ).then((response) => response.data);
    return members;
  },
  async getMember(id: string): Promise<Member | undefined> {
    if (!id) {
      throw new Error('id is required');
    }
    return this.get().then((memberList) =>
      memberList.find((member) => member.id == id)
    );
  },
};
