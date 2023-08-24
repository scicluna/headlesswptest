import { WPPost } from "@/types/wptypes"
import { wp } from "./connectWP"


export async function getOnePost(slug: string) {
    try {
        const post: WPPost[] = await wp.posts().slug(slug)
        const comments = await wp.comments().order('asc').forPost(post[0].id)
        return [post[0], comments]
    } catch (err) {
        console.error("Failed to fetch posts:", err)
        return [null, null]
    }
}