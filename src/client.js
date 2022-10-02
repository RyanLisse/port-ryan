import sanity from "@sanity/client";

export default sanity(
    {
        projectId: "8norx9k6",
        dataset: "production",
        useCdn: false,
    }
);