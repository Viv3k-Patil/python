export interface ResourceLink {
  label: string
  url: string
}

export interface ResourceLinks {
  recordings?: ResourceLink[]
  notes?: ResourceLink[]
  cheatsheets?: ResourceLink[]
  animations?: ResourceLink[]
}

export interface Lesson {
  day: string
  title: string
  topics: string[]
  flag?: 'PROJECT' | 'CAPSTONE'
  resources?: ResourceLinks
}

export interface Module {
  id: string
  number: number
  className: string
  title: string
  range: string
  summary: string
  lessons: Lesson[]
}

const lesson = (day: string, title: string, topics: string[], resources?: ResourceLinks, flag?: Lesson['flag']): Lesson => ({ day, title, topics, resources, flag })

export const syllabusModules: Module[] = [
  {
    id: 'm1', number: 1, className: 'm-python', title: 'Python Foundations', range: 'Sessions 1-4',
    summary: 'Core syntax, data structures, functions',
    lessons: [
      lesson('SESSION 1', 'Computer Basics & Python Setup', ['Why Python, ecosystem overview', 'Installing Python + VS Code setup', 'Writing and running your first Python script'], {
        recordings: [{ label: 'Recording 1', url: 'https://drive.google.com/file/d/1KDWpD8qIjmsrUEOFIgAAAxuw8bw1H4Ub/view?usp=sharing' }],
        notes: [{ label: 'Notes 001', url: 'https://github.com/Viv3k-Patil/python-fullstack-batch20/blob/main/class_notes/001_computer_basics_python_setup.md' }],
        cheatsheets: [{ label: 'Cheatsheet 001', url: 'https://github.com/Viv3k-Patil/python-fullstack-batch20/blob/main/class_notes/001_cheatsheet.png' }],
      }),
      lesson('SESSION 2', 'Python Setup & Basics', ['Variables, data types, and operators', 'Type casting', 'Arithmetic, comparison, and logical operators'], {
        recordings: [{ label: 'Recording 2', url: 'https://drive.google.com/file/d/1MzbVyRtIkA0i-4sRbBHzkGVWglgppSK1/view?usp=sharing' }],
        notes: [{ label: 'Notes 002', url: 'https://github.com/Viv3k-Patil/python-fullstack-batch20/blob/main/class_notes/002_python-setup-and-basics-notes.md' }],
        cheatsheets: [{ label: 'Cheatsheet 002', url: 'https://github.com/Viv3k-Patil/python-fullstack-batch20/blob/main/class_notes/002_cheatsheet.png' }],
        animations: [{ label: 'Animation', url: '/animations/python-fundamentals/index.html' }],
      }),
      lesson('SESSION 3', 'Strings & Data Structures - Part 1', ['Strings, lists, tuples, dictionaries, and sets', 'Core operations and working with Python data structures'], {
        recordings: [{ label: 'Recording 3', url: 'https://drive.google.com/file/d/1VvAO4LRn4mOpDTas7yb8odFwl4Gee3DY/view?usp=sharing' }],
        notes: [{ label: 'Notes 003 - Part 1', url: 'https://github.com/Viv3k-Patil/python-fullstack-batch20/blob/main/class_notes/003_strings_data_structures.md' }],
      }),
      lesson('SESSION 4', 'Strings & Data Structures - Part 2', ['Continue working with strings and Python data structures', 'Practice common operations and patterns'], {
        notes: [{ label: 'Notes 003 - Part 2', url: 'https://github.com/Viv3k-Patil/python-fullstack-batch20/blob/main/class_notes/003_strings_data_structures.md' }],
        animations: [{ label: 'Animation', url: '/animations/python-memory-visualizer/index.html' }],
      }),
    ],
  },
]
