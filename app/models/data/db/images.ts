
import meta from "@configs/meta"
import makeQueryable from "@utils/makeQueryable"


const imagesData = [
    {
        id: 'logo-transparent',
        src: "/assets/images/logo-transparent.png",
        alt: 'logo-transparent'
    },
    {
        id: 'yonder-airways-logo',
        src: `${meta.basePaths.projects}yonder-airways/yonder-airways-logo.png`,

    },
    {
        id: 'yonder-airways-circle-favicon',
        src: `${meta.basePaths.projects}yonder-airways/yonder-airways-circle-favicon.png`,
    },
    {
        id: 'yonder-airways-square-favicon',
        src: `${meta.basePaths.projects}yonder-airways/yonder-airways-square-favicon.png`,
    },
    {
        id: 'yonder-airways-business-card-mockup',
        src: `${meta.basePaths.projects}yonder-airways/yonder-airways-business-card-mockup.png`,
    },
    {
        id: 'yonder-airways-flight-ticket-mockup',
        src: `${meta.basePaths.projects}yonder-airways/yonder-airways-flight-ticket-mockup.png`,
    },
    {
        id: 'yonder-airways-travel-site-mockup',
        src: `${meta.basePaths.projects}yonder-airways/yonder-airways-travel-site-mockup.png`,
    },
    {
        id: 'yonder-airways-logo-schema',
        src: `${meta.basePaths.projects}yonder-airways/yonder-airways-logo-schema.png`,
    },
    {
        id: 'elixir-and-cream-cafe-logo',
        src: `${meta.basePaths.projects}elixir-and-cream-cafe/elixir-and-cream-cafe-logo.png`,
    },
    {
        id: 'elixir-and-cream-cafe-logo',
        src: `${meta.basePaths.projects}elixir-and-cream-cafe/elixir-and-cream-cafe-logo.png`,
    },
    {
        id: 'elixir-and-cream-cafe-logo',
        src: `${meta.basePaths.projects}elixir-and-cream-cafe/elixir-and-cream-cafe-logo.png`,
    },
    {
        id: 'elixir-and-cream-cafe-logo',
        src: `${meta.basePaths.projects}elixir-and-cream-cafe/elixir-and-cream-cafe-logo.png`,
    },
    {
        id: 'elixir-and-cream-cafe-logo',
        src: `${meta.basePaths.projects}green-harvest-farmers-market/green-harvest-farmers-market-logo.png`,
    },
    {
        id: 'elixir-and-cream-cafe-logo',
        src: `${meta.basePaths.projects}elixir-and-cream-cafe/elixir-and-cream-cafe-logo.png`,
    },
    {
        id: 'elixir-and-cream-cafe-logo',
        src: `${meta.basePaths.projects}elixir-and-cream-cafe/elixir-and-cream-cafe-logo.png`,
    },
    {
        id: 'elixir-and-cream-cafe-logo',
        src: `${meta.basePaths.projects}elixir-and-cream-cafe/elixir-and-cream-cafe-logo.png`,
    },
    {
        id: 'value',
        src: `${meta.basePaths.banners}values.svg`,
    },
    {
        id: 'community',
        src: `${meta.basePaths.banners}community.svg`,
    },
    {
        id: 'tools',
        src: `${meta.basePaths.banners}tools.svg`,
    },
    {
        id: 'services',
        src: `${meta.basePaths.banners}services.svg`,
    },
    {
        id: 'joshua-desir',
        src: `${meta.basePaths.people}joshua-desir/joshua-desir-profile.jpg`,
    },
    {
        id: 'jeffrey-desir',
        src: `${meta.basePaths.people}jeffrey-desir/jeffrey-desir-profile.png`,
    }
]

const images = makeQueryable({ data: imagesData })

export default images