export interface Member {
  login: string;
  company: string;
  id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  type: string;
}

export interface Company {
  name: string;
  url: string;
}
