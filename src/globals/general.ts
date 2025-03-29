import { GlobalConfig } from "payload";

export const General : GlobalConfig = {
    slug: "general",
    fields: [
        {
            type: "upload",
            relationTo: "media",
            name: "logo",
        }
    ]
}