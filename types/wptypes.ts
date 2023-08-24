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

export type WPComment = {
    id: number;
    post: number;
    parent: number;
    author: number;
    author_name: string;
    author_url: string;
    date: string;
    date_gmt: string;
    content: {
        rendered: string;
    };
    link: string;
    status: string;
    type: string;
    author_avatar_urls: {
        24: string;
        48: string;
        96: string;
    };
    meta: any[];  // This is set to any since you didn't provide the content structure. Refine this if you know the exact type.
    _links: {
        self: Array<{
            href: string;
        }>;
        collection: Array<{
            href: string;
        }>;
        author: Array<{
            embeddable: boolean;
            href: string;
        }>;
        up: Array<{
            embeddable: true;
            post_type: string;
            href: string;
        }>;
    };
};

export type WPCommentPaging = {
    total: number;
    totalPages: number;
    links: {
        'https://api.w.org/': string;
    };
};

// Note: The actual response might be an array of WPComment objects with the _paging property.
// If that's the case, you can represent the entire response as:
export type WPCommentsResponse = {
    comments: WPComment[];
    _paging: WPCommentPaging;
};