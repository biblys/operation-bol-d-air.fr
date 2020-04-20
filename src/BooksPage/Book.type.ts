import { Moment } from 'moment';

export type Book = {
  startDate: Moment;
  endDate: Moment;
  publisherName: string;
  publisherUrl: string;
  coverImageUrl?: string;
  altText?: string;
  paperEan?: string;
  downloadLink?: string;
  current?: boolean;
};
