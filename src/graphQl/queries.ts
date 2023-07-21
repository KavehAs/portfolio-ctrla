import { gql } from "@apollo/client";

export const GET_WEBSITES_INFO = gql`
    query portfolio {
        websites {
            id
            title
            category {
                categoryTitle
                id
            }
            assets {
                url
                id
            }
            content {
                text
            }
        }
}
`;