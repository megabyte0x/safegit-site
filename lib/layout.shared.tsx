import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: "SafeGit",
        },
        githubUrl: "https://github.com/megabyte0x/safegit",
        links: [
            {
                text: "CLI Repo",
                url: "https://github.com/megabyte0x/safegit",
                external: true,
            },
            {
                text: "Site Repo",
                url: "https://github.com/megabyte0x/safegit-site",
                external: true,
            },
        ],
    };
}
