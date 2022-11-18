import type { PortfolioProps } from "@typings/Portfolio"
import utils from "@utils/index"

const { files, url, email, phone, formula, rich_text, title, multi_select, number, status, select, isDatabase, getProperties } = utils().notion

const types = () => {

    const typesObject = {
        portfolio: {
            id: "Portfolio",
            shape: (data: any): PortfolioProps => {

                const { Name } = getProperties(data) 

                const shapeObject = {
                    name: title(Name),
                }

                return { ...shapeObject }

            },

            predicate: (data: any) => {
                return isDatabase(typesObject?.portfolio?.id, data)
            }
        },
    }

    return { ...typesObject }
}

export default types