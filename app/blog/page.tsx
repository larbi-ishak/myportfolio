import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}

export default function Blog() {
  const posts = allPosts.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className="">
      <h1 className="mb-3 underline text-2xl">
        Blogs
      </h1>
      {posts.map((post: any, idx: number) => (
        <div className="flex" key={idx}>
          <Link href={`/blog/${post.title}`} className="hover:underline">{post.title}</Link>
          <time
            dateTime={post.date}
            className="mb-2 block text-xs text-gray-600"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
      ))}

      {/*<PostCard key={idx} {...post} />*/}
    </div>
  );
}
