import { CardPost } from "@/components/CardPost";

async function getAllPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  if (!response.ok) {
    console.error("Alguma coisa errada aconteceu");
  }
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      {posts.map((post) => (
        <CardPost post={post} />
      ))}
    </main>
  );
}
