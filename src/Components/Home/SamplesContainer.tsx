import { useQuery } from "@apollo/client"
import { GET_WEBSITES_INFO } from "../../graphQl/queries"
import SampleCards from "./SampleCards";
import { Grid } from "@mui/material";

interface websiteDataType {
    id: string,
    title: string,
    assets: { url: string, id: string }[],
    content: { text: string },
    category: { categoryTitle: string }
}

export default function SamplesContainer() {

    const { loading, data, error } = useQuery(GET_WEBSITES_INFO);

    return (
        <div className="text-greyText">
            <Grid container>
                {data && data.websites.map((website: websiteDataType) =>
                    <Grid item xs={12} key={website.id} className="flex justify-center my-10">
                        <SampleCards 
                            title={website.title}
                            category={website.category.categoryTitle}
                            assets={website.assets}
                            content={website.content.text}
                            link='www.google.com' />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
