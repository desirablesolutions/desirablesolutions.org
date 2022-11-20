export type FancyLine = {
    before?: string,
    texts?: string[],
    speed?: number,
    pauseTime?: number,
    after?: string,
    href?: string
}

export type Image = {
    src?: string,
    alt?: string
}

export type HeroProps = {
    lines: {
        first: FancyLine,
        second: FancyLine,
    },
    bgImage: {
        src: string
    },
    cta: {
        name: string,
        href: string

    }
}