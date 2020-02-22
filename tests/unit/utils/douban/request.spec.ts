import { createDoubanApiUrl, simplifyUserBookData } from '@/utils/douban/request';
import { DoubanBookStatus, IDoubanUserBookItem } from '@/interfaces/douban';

describe('# Douban utils', () => {
  it('should simplify user book collection data to save some load', () => {
    const rawData: IDoubanUserBookItem = {
      book: {
        alt: 'http://douban.com/subject/123',
        author: [],
        id: '',
        pages: '',
        rating: {
          max: 5,
          min: 0,
          numRaters: 0,
          average: '',
        },
        title: 'test',
        tags: [],
        translator: [],
        url: 'http://localtion',
      },
      tags: ['my_tag'],
      book_id: '123123',
      id: 0,
      status: DoubanBookStatus.read,
      updated: '2020-01-01 00:00:00',
      user_id: 'user',
      rating: {
        max: 5,
        min: 0,
        value: '4',
      },
      comment: 'my comment',
    };
    expect(simplifyUserBookData(rawData)).toEqual({
      book_id: '123123',
      id: 0,
      rating: 4,
      book_title: 'test',
      url: 'http://douban.com/subject/123',
      status: DoubanBookStatus.read,
      updated: '2020-01-01 00:00:00',
      user_id: 'user',
      comment: 'my comment',
      tags: ['my_tag'],
    });
  });
  it('should create douban api url with given parameters', () => {
    expect(createDoubanApiUrl('book', 'ahbei', 0, 20, DoubanBookStatus.read))
      .toBe('https://douban.uieee.com/v2/book/user/ahbei/collections?start=0&count=20&status=read');
  });
});
