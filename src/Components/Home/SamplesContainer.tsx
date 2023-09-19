import { useQuery } from "@apollo/client"
import { GET_WEBSITES_INFO } from "../../graphQl/queries"
import SampleCards from "./SampleCards";
import { Grid } from "@mui/material";
import { useEffect } from "react";

interface websiteDataType {
    id: string,
    title: string,
    assets: { url: string, id: string }[],
    content: { html: string },
    category: { categoryTitle: string } ,
    link: string
}

export default function SamplesContainer() {

    const { loading, data, error } = useQuery(GET_WEBSITES_INFO);

    useEffect(() => {
        console.log(loading , data , error)
    } , [loading])

    return (
        <div className="text-greyText">
            <Grid container>
                {data && data.websites.map((website: websiteDataType) =>
                    <Grid item xs={12} key={website.id} className="flex justify-center my-10">
                        <SampleCards 
                            title={website.title}
                            category={website.category.categoryTitle}
                            assets={website.assets}
                            content={website.content.html}
                            link={website.link} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
