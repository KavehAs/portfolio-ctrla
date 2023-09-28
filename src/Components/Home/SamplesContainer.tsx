import { useQuery } from "@apollo/client"
import { GET_WEBSITES_INFO } from "../../graphQl/queries"
import SampleCards from "./SampleCards";
import { Grid } from "@mui/material";
import Loading from "../Loading";
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

interface websiteDataType {
    id: string,
    title: string,
    assets: { url: string, id: string }[],
    content: { html: string },
    category: { categoryTitle: string },
    link: string
}

export default function SamplesContainer() {

    const { loading, data, error } = useQuery(GET_WEBSITES_INFO);

    if (loading) {
        return (
            <>
                <div className="w-full flex justify-center md:hidden">
                    <Loading type={"bubbles"} color='#BDBDBD' width={130} height={250} />
                </div>

                <div className="w-full hidden justify-center md:flex">
                    <Loading type={"bubbles"} color='#BDBDBD' width={200} height={250} />
                </div>
            </>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col items-center gap-11">
                <SentimentDissatisfiedOutlinedIcon fontSize="inherit" className="text-pureWhite text-7xl md:text-9xl" />
                <div className="text-greyText text-2xl md:text-3xl  text-center">
                    متاسفیم! در دریافت اطلاعات به مشکل برخوردیم... لطفا مجددا امتحان کنید.
                </div>
            </div>
        )
    }
    else if (!loading) {
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
}
