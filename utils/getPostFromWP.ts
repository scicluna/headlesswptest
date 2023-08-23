export type WPPost = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        footnotes: string;
    };
    categories: number[];
    tags: number[];
    _links: {
        self: any[]; // 'Array' is inferred from the data, however, it's preferable to define a more specific type if possible
        collection: any[];
        about: any[];
        author: any[];
        replies: any[];
        'version-history': any[];
        'predecessor-version': any[];
        'wp:attachment': any[];
        'wp:term': any[];
        curies: any[];
    };
};



export async function getPostFromWP() {
    const result = await fetch('http://localsite-test.local/wp-json/wp/v2/posts?')
    const posts = await result.json() as WPPost[]

    return posts
}