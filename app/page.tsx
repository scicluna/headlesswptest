import Post from "@/components/server/Post"
import { getInitialPosts } from "@/utils/getInitialPosts"
import Hero from "@/components/server/Hero"
import Link from "next/link"

export default async function Home() {
  const posts = await getInitialPosts()
  if (posts == null) return null //redirect to error page

  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      {posts && posts.map(post => (
        <Post post={post} />
      ))}
      <Link href={'/posts?page=1'}>See all posts</Link>
    </main>
  )
}
