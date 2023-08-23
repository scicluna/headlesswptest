import { getPostFromWP } from "@/utils/getPostFromWP"

export default async function Home() {
  const posts = await getPostFromWP()
  return (
    <main className="w-full flex justify-center">
      {posts.map(post => (
        <div className="w-1/2 p-10">
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="text-4xl" />
          <section dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="flex flex-col gap-5" />
        </div>
      ))}
    </main>
  )
}
