export const newsletters = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Newsletter ${index + 1}`,
  shortContent: `Newsletter ${index + 1} short content`,
  longContent: `Newsletter ${index + 1} long content`,
  createdAt: '2023-01-01',
  author: `Newsletter ${index + 1} Author`,
  tags: Array.from({ length: 3 }, (_, _index) => `tag ${(index % 8) + _index + 1}`),
}));
