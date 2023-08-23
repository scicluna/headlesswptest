import Post from "@/components/server/Post"
import { getPostFromWP } from "@/utils/getPostFromWP"

export default async function Home() {
  const posts = await getPostFromWP()
  if (posts == null) return null //redirect to error page

  return (
    <main className="w-full flex flex-col items-center">
      {posts && posts.map(post => (
        <Post post={post} />
      ))}
    </main>
  )
}
