import type { ReactNode } from 'react';

export interface ReplyProps {
  replyText: string;
  children?: ReactNode;
  avatarLink: string;
  username: string;
  dateTimePosted: string;
  voteCount: number;
}
