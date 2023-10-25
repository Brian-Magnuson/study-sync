
type FileInfo = {
  name: string,
  path: string,
}

export type PostInfo = {
  id: string,
  timestamp: string,
  author: string,
  authorImgUrl: string,
  content: string,
  attachments?: FileInfo[],
  isResource?: boolean,
}

export type TopicPostData = {
  id: string,
  posts: PostInfo[],
}

export const postData: TopicPostData[] = [
  {
    id: "cop4600",
    posts: [
      {
        id: '1',
        timestamp: '2023-10-16T12:48:00.000Z',
        author: 'Rob',
        authorImgUrl: 'https://picsum.photos/id/412/200',
        content: 'Here\'s a studyguide I compiled for the exam',
        isResource: true,
        attachments: [
          {
            name: 'os-studyguide.docx',
            path: '/user-data/os-studyguide.docx',
          }
        ]
      },
      {
        id: '2',
        timestamp: '2023-10-14T16:25:00.000Z',
        author: 'John',
        authorImgUrl: 'https://picsum.photos/id/237/200',
        content: 'Make sure you guys have a windows machine or other computer with an x86 processor https://www.eng.ufl.edu/students/advising/fall-semester-checklist/computer-requirements/',
      },
      {
        id: '3',
        timestamp: '2023-10-12T15:29:00.000Z',
        author: 'Susan',
        authorImgUrl: 'https://picsum.photos/id/1042/200',
        content: 'The WAD file system is used for maps in the Doom games, the layout of the data is shown here',
        isResource: true,
        attachments: [
          {
            name: 'wad.html',
            path: '/user-data/wad.html',
          }
        ]
      },
      {
        id: '4',
        timestamp: '2023-10-12T13:34:00.000Z',
        author: 'Kev',
        authorImgUrl: 'https://picsum.photos/id/367/200',
        content: 'Whats the wad system used in the project?',
      },
      {
        id: '5',
        timestamp: '2023-09-14T18:34:00.000Z',
        author: 'John',
        authorImgUrl: 'https://picsum.photos/id/237/200',
        isResource: true,
        content: 'Here is a link to the syllabus https://www.cise.ufl.edu/~nemo/cop4600/syllabus.html',
      },
      {
        id: '6',
        timestamp: '2023-09-14T18:22:00.000Z',
        author: 'Rob',
        authorImgUrl: 'https://picsum.photos/id/412/200',
        content: 'Does anyone have a link to the syllabus?',
      },
      {
        id: '7',
        timestamp: '2023-08-25T16:45:00.000Z',
        author: 'John',
        authorImgUrl: 'https://picsum.photos/id/237/200',
        content: 'The user interface is the part of the operating system that the user interacts with. It is the most visible part of the OS.',
        isResource: true,
        attachments: [
          {
            name: 'os-stuff.md',
            path: '/user-data/os-stuff.md',
          }
        ]
      },
      {
        id: '8',
        timestamp: '2023-08-22T12:00:00.000Z',
        author: 'Susan',
        authorImgUrl: 'https://picsum.photos/id/1042/200',
        content: 'An operating system is a piece of software that manages the allocation of computer hardware. The OS provides a layer of abstraction between the hardware and the user.',
      }
    ]
  },
  {
    id: "cen4721",
    posts: [
      {
        id: '1',
        timestamp: '2023-10-16T16:48:00.000Z',
        author: 'Joe',
        authorImgUrl: 'https://picsum.photos/id/782/200',
        content: 'The professor provided a sample csv file',
        isResource: true,
        attachments: [ {
          name: 'sample-data.csv',
          path: '/user-data/sample-data.csv',
        }
      ]
      },
      {
        id: '2',
        timestamp: '2023-10-16T16:22:00.000Z',
        author: 'Kylie',
        authorImgUrl: 'https://picsum.photos/id/64/200',
        content: 'What csv data are we supposed to use for the assignment?',
      },
      {
        id: '3',
        timestamp: '2023-10-14T13:17:00.000Z',
        author: 'Joe',
        authorImgUrl: 'https://picsum.photos/id/782/200',
        content: 'Here\'s the personas pdf',
        isResource: true,
        attachments: [ {
          name: 'personas.pdf',
          path: '/user-data/os-stuff.md',
        }
      ]
      },
      {
        id: '4',
        timestamp: '2023-10-03T17:55:00.000Z',
        author: 'Ryan',
        authorImgUrl: 'https://picsum.photos/id/1044/200',
        isResource: true,
        content: 'Here is the monkey business illusion https://www.youtube.com/watch?v=IGQmdoK_ZfY',
      },
      {
        id: '5',
        timestamp: '2023-10-03T16:42:00.000Z',
        author: 'Kylie',
        authorImgUrl: 'https://picsum.photos/id/64/200',
        content: 'Does anyone have the link to the selective attention video?',
      },
    ]
  },
  {
    id: "phy2048",
    posts: [
      {
        id: '6',
        timestamp: '2023-10-21T17:55:00.000Z',
        author: 'Rob',
        authorImgUrl: 'https://picsum.photos/id/412/200',
        isResource: true,
        content: 'And here\'s the answer key',
        attachments: [ {
          name: '2048_Spring17_Exam1_Solution.pdf',
          path: '/user-data/2048_Spring17_Exam1_Solution.pdf',
        }
      ]
      },
      {
        id: '7',
        timestamp: '2023-10-21T17:53:00.000Z',
        author: 'Rob',
        authorImgUrl: 'https://picsum.photos/id/412/200',
        content: 'I\'m down I also found an older exam from the class that we can use to practice',
        isResource: true,
        attachments: [ {
          name: '2048_Spring17_Exam1.pdf',
          path: '/user-data/2048_Spring17_Exam1.pdf',
        }
      ]
      },
      {
        id: '8',
        timestamp: '2023-10-21T17:43:00.000Z',
        author: 'Kylie',
        authorImgUrl: 'https://picsum.photos/id/64/200',
        content: 'Does anyone want to get together an study for the upcoming exam?',
      },
      {
        id: '9',
        timestamp: '2023-09-27T16:12:00.000Z',
        author: 'Rob',
        authorImgUrl: 'https://picsum.photos/id/412/200',
        isResource: true,
        content: 'Here is a link to a physics calculator to double check your work on the homework https://www.omnicalculator.com/physics',
      },
      {
        id: '10',
        timestamp: '2023-09-26T12:48:00.000Z',
        author: 'Kev',
        authorImgUrl: 'https://picsum.photos/id/367/200',
        content: 'I\'m struggling with some of the problem sets related to Newton\'s laws.',
      },
    ]
  },
  {
    id: "enc3246",
    posts: [
      {
        id: '1',
        timestamp: '2023-10-25T17:12:00.000Z',
        author: 'Jacob',
        authorImgUrl: 'https://picsum.photos/id/330/200',
        content: 'Here\s the article for the synthesis assignment',
        isResource: true,
        attachments: [ {
          name: 'SynthesizingSources_materials.pdf',
          path: '/user-data/SynthesizingSources_materials.pdf',
        }
      ]
      },
      {
        id: '2',
        timestamp: '2023-10-24T20:12:00.000Z',
        author: 'Ryan',
        authorImgUrl: 'https://picsum.photos/id/1044/200',
        content: 'I think we were supposed to use a specific one',
      },
      {
        id: '3',
        timestamp: '2023-10-24T19:02:00.000Z',
        author: 'John',
        authorImgUrl: 'https://picsum.photos/id/237/200',
        content: 'For the synthesizing sources assignment were we meant to pick our own article?',
      },
      {
        id: '4',
        timestamp: '2023-10-11T21:45:00.000Z',
        author: 'Kylie',
        authorImgUrl: 'https://picsum.photos/id/64/200',
        content: 'I found this link that helps with the job application assignment https://www.asme.org/topics-resources/content/mastering-the-application-process-for-internships',
        isResource: true,
      },
      {
        id: '5',
        timestamp: '2023-10-06T16:45:00.000Z',
        author: 'Ryan',
        authorImgUrl: 'https://picsum.photos/id/1044/200',
        content: 'The required parts of the elevator pitch are listed here',
        isResource: true,
        attachments: [ {
          name: 'ElevatorPitch.pdf',
          path: '/user-data/ElevatorPitch.pdf',
        }
      ]
      },
      {
        id: '6',
        timestamp: '2023-10-06T14:32:00.000Z',
        author: 'Jacob',
        authorImgUrl: 'https://picsum.photos/id/330/200',
        content: 'For the Elevator Pitch assignment what were we meant to list exactly?',
      }
    ]
  }
];
