import { WPPost } from "@/types/wptypes"
import { wp } from "./connectWP"


export async function getOnePost(slug: string) {
    try {
        const post: WPPost[] = await wp.posts().slug(slug)
        return post
    } catch (err) {
        console.error("Failed to fetch posts:", err)
        return null
    }
}