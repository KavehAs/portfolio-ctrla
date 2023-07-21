import { useQuery } from "@apollo/client"
import { GET_WEBSITES_INFO } from "../../graphQl/queries"
import SampleCards from "./SampleCards";

interface websiteDataType {
    id: string ,
    title: string ,
    assets: {url:string , id: string}[] ,
    content: {text: string} ,
    category: {categoryTitle: string}
}

export default function SamplesContainer() {

    const {loading , data , error} = useQuery(GET_WEBSITES_INFO);

    return (
        <div className="text-greyText">
            {data && data.websites.map((website : websiteDataType) => <SampleCards key={website.id}  title={website.title}
            category={website.category.categoryTitle} assets={website.assets} content={website.content.text} link='www.google.com'/>)}
        </div>
    )
}
