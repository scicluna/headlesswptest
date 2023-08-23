import FullPost from "@/components/server/FullPost"
import { getOnePost } from "@/utils/getOnePost"

type OnePostProps = {
  params: {
    slug: string
  }
}

export default async function OnePost({ params }: OnePostProps) {
  const post = await getOnePost(params.slug)
  if (post == null) return null //redirect to error page

  return (
    <main className="w-full flex flex-col items-center">
      <FullPost post={post[0]} />
    </main>
  )
}