// src/components/Feed.tsx
export interface Post {
  id: number;
  name: string;
  imageUrl: string;
}

const posts: Post[] = [
  { id: 1, name: "Aghahowa Favour", imageUrl: "/images/7.png" },
  { id: 2, name: "Osowa Tejiri", imageUrl: "/images/7.png" },
  { id: 3, name: "Tega Steve", imageUrl: "/images/7.png" },
];

const Feed: React.FC = () => {
  return (
    <div className="h-screen overflow-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-100">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              src={post.imageUrl}
              alt={post.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-2">
              <h3 className="text-md font-semibold">{post.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
