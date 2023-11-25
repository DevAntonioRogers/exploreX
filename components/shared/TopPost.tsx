import { blogData } from "@/constants/blogData";
import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
const TopPost = () => {
  const topPost = blogData.filter(
    (blog) => blog.topPost === true
  );
  return (
    <section aria-labelledby="top-post">
      <div className="w-full text-center">
        <h2
          id="top-post"
          className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          Top Post
        </h2>
      </div>

      <div className="flex h-full flex-col gap-12 items-center">
        {topPost.map((post, index) => (
          <Link
            href={{
              pathname: `blog/${post.id}`,
              query: { ...post },
            }}
          >
            <article key={index}>
              <div className="relative cursor-pointer">
                <Image
                  src={post.image_path}
                  width={800}
                  height={800}
                  alt={`Image fot ${post.title}`}
                />
                <Overlay />
              </div>
              <div className="w-full flex justify-center">
                <Tag text={post.tags} />
              </div>

              <h3 className="font-extrabold uppercase text-tertiary text-center">
                {post.title}
              </h3>

              <div className="flex gap-3 justify-center mt-2">
                <span className="font-light">
                  By: {post.authorName}
                </span>
                <span className="italic font-light">
                  {post.publishDate}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopPost;
