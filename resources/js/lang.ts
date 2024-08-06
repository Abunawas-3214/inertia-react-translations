import { usePage } from "@inertiajs/react";
import { PageProps } from "./types";

export default function __(key: any, replacements = {}) {
    let translation = usePage<PageProps>().props.translations[key];

    Object.keys(replacements).forEach((replacement) => {
        translation = translation.replace(
            `:${replacement}`,
            replacements[replacement as keyof typeof replacements]
        );
    });

    return translation;
}