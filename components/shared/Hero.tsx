import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import Link from "next/link";
import Image from "next/image";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";

const Hero: React.FC<{ posts: PostTypes[] }> = ({
  posts,
}) => {
  const featuredPost = posts.filter(
    (post) => post.featured === true
  );

  const topFeatured = featuredPost.slice(0, 1);
  const bottomFeatured = featuredPost.slice(1, 4);

  return (
    <section className="relative">
      <div className="w-[95%] mx-auto max-w-[1450px] z-1">
        {topFeatured.map((post) => (
          <article
            key={post.id}
            className="flex flex-col gap-5 mb-5 text-center relative"
          >
            <Tag text={post.category} />

            <h2 className="text-6xl font-extrabold uppercase text-tertiary">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 font-light text-tertiary justify-center">
              {post.user.image && (
                <Image
                  src={post.user.image}
                  height={50}
                  width={50}
                  alt={`Image of ${post.user.name}`}
                  className="rounded-full drop-shadow-lg"
                />
              )}
              <span>{post.user.name}</span>
              <span className=" italic">
                {formatDate(post.createdAt.toString())}
              </span>
            </div>
            <Link href={`/blog/${post.id}`}>
              <div className="relative max-h-[600px] overflow-hidden shadow-xl">
                {post.img && (
                  <img
                    src={post.img}
                    alt={`image for ${post.title}`}
                    className="object-cover w-full h-full"
                  />
                )}
                <Overlay />
              </div>
            </Link>
          </article>
        ))}

        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {bottomFeatured.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-3 items-center text-center relative"
            >
              <Link
                className="w-full"
                href={`/blog/${post.id}`}
              >
                <div className="relative  overflow-hidden h-72 shadow-xl w-full">
                  {post.img && (
                    <img
                      src={post.img}
                      alt={`image for ${post.title}`}
                      className="object-cover w-full h-full"
                    />
                  )}
                  <Overlay />
                </div>
              </Link>

              <Tag text={post.category} />
              <h3 className="text-1xl font-extrabold uppercase text-tertiary px-5">
                {post.title}
              </h3>
              <span className="font-light italic">
                {formatDate(post.createdAt.toString())}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
