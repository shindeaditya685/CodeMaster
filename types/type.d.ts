interface BlogType {
  userId: string;
  imageUrl: string;
  _id: string;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  javaCode: string | undefined;
  cppCode: string | undefined;
  jsCode: string | undefined;
  pythonCode: string | undefined;
  createdAt: string;
  updatedAt: string;
  userLastName: string;
  userFirstName: string;
}

interface BlogPageProps {
  params: {
    id: string;
  };
}

interface User {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  imageUrl: string | null;
}
