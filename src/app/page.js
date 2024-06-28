import { CardPost } from "@/components/CardPost";
import styles from "./page.module.css";
import logger from "@/logger";
import Link from "next/link";

async function getAllPosts(page) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?_page=${page}&_per_page=6`
    );
    if (!response.ok) throw new Error("Falha na rede");
    return response.json();
  } catch (error) {
    logger.error("Ops, algo correu mal: " + error.message);
    return [];
  }
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}

      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
