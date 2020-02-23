interface IFaq {
  question: string;
  answer: string;
}

export const faqs: IFaq[] = [{
  question: '为什么只能备份已读？',
  answer: '因为豆瓣 API v2 只支持批量获取用户标记的图书数据，电影和音乐暂时没找到 API。暂不支持在读和想读，因为懒。',
}, {
  question: '如何备份？',
  answer: '请参照代码仓库的 README。',
}, {
  question: '还有别的问题吗？',
  answer: '请到代码仓库提 issue，多谢。',
}];
