export const sampleNewsletter = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  issue_number: index + 1,
  title: `Title ${index + 1}`,
  table_of_content: [
    `Newsletter ${index + 1} short content`,
    '[국개협 무물] Q1. 해외파견 처우와 업무 만족도',
  ],
  content: `Newsletter ${index + 1} long content`,
  createdAt: '2023-01-01',
  view_count: '',
  issue_date: '2021-09-03T00:00:00',
  author: `Newsletter ${index + 1} Author`,
  tags: [
    {
      id: 5,
      name: 'ODA',
    },
    {
      id: 6,
      name: '국개협사업',
    },
    {
      id: 7,
      name: 'KOICA프로젝트',
    },
  ],
}));
