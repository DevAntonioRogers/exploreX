"use client";

import { useState } from "react";
import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";

const Posts = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs(
      (prevVisibleBlogs) => prevVisibleBlogs + 3
    );
  };

  return (
    <section className="col-span-2" aria-labelledby="posts">
      <div className="w-full text-center">
        <h2
          id="posts"
          className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          All Post
        </h2>
      </div>

      <div className="flex flex-col gap-10 h-full">
        {blogData.slice(0, visibleBlogs).map((post, id) => (
          <BlogCard post={post} key={id} />
        ))}
        {visibleBlogs < blogData.length && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreBlogs}
              text="Show more"
              aria="Show more blog post"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Posts;
