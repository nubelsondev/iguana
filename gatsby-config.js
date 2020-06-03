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
        siteUrl: "https://iguana.pt",
    },
    plugins: [
        `gatsby-plugin-styled-components`,
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
