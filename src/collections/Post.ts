import { CollectionConfig } from "payload";

export const Post: CollectionConfig = {
    slug: "posts",
    fields: [
        {
            type: "text",
            name: "title",
            required: true
        },
        {
            type: "text",
            name: "slug",
            required: true,
        },
        {
            type: "upload",
            relationTo: "media",
            name: "cover",
            required: true,
        },
        {
            type: "textarea",
            name: "description",
            required: true,
        },
        {
            type: "richText",
            name: "content",
            required: true,
        }
    ],
};