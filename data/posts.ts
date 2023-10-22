
type File = {
  name: string,
  path: string,
}

export type Post = {
  id: string,
  timestamp: string,
  author: string,
  authorImgUrl: string,
  content: string,
  attachments?: File[],
}

export const postData: Post[] = [
  {
    id: '2',
    timestamp: '2021-01-02T12:00:00.000Z',
    author: 'John',
    authorImgUrl: 'https://picsum.photos/id/237/200',
    content: 'The user interface is the part of the operating system that the user interacts with. It is the most visible part of the OS.',
    attachments: [
      {
        name: 'os-stuff.md',
        path: '/user-data/os-stuff.md',
      }
    ]
  },
  {
    id: '1',
    timestamp: '2021-01-01T12:00:00.000Z',
    author: 'Susan',
    authorImgUrl: 'https://picsum.photos/id/64/200',
    content: 'An operating system is a piece of software that manages the allocation of computer hardware. The OS provides a layer of abstraction between the hardware and the user.',
  },
]
