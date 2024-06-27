import Image from "next/image";
import styles from "./cardPost.module.css";
import { Avatar } from "../Avatar";

export const CardPost = ({ post }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image
            src={post.cover}
            alt={`Capa do post de título: ${post.title}`}
            width={438}
            height={133}
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
