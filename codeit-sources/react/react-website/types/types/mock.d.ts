interface Topic {
  topic: {
    id: string;
    slug: string;
    title: string;
    summary: string;
  };
}
interface Course {
  id: string;
  code: string;
  title: string;
  difficulty: number;
  slug: string;
  summary: string;
  language: string;
  photoUrl: string;
  newReleased: boolean;
  topics: Topic[];
}

interface Writer {
  name: string;
  profile: {
    photo: string;
  };
  level: string;
}
interface Answer {
  createdAt: string;
  updatedAt: string;
  conent: string;
  writer: Writer;
  id: string;
}
interface Question {
  id: string;
  title: string;
  content: string;
  answers: Answer[];
  createdAt: string;
  updatedAt: string;
  writer: Writer;
  like?: boolean | undefined;
  likeCount?: number | undefined;
  totalLikeCount?: number | undefined;
}
