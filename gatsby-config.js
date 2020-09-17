/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Iguana",
        description:
            "Dedicação Premium com o Cliente, Parceiros & Colaboradores",
        siteUrl: "https://www.iguanalda.com",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Iguana`,
                short_name: `Iguana`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#F27924`,
                display: `minimal-ui`,
                icon: `src/content/logo.svg`,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Montserrat`,
                        variants: [`500`, `600`, `700`, `800`],
                    },
                ],
            },
        },
    ],
}
