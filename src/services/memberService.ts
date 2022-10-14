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
};

export const userService = {
  async getUser(id: string): Promise<Member | undefined> {
    const member = await axios(`https://api.github.com/users/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => response.data);
    if (!id) {
      throw new Error('id is required');
    }
    return member;
  },
};
