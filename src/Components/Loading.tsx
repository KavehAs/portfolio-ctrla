import ReactLoading, { LoadingType } from 'react-loading';

interface loadingPropTypes {
    type: LoadingType,
    color: string ,
    width : number ,
    height : number
}

export default function Loading({ type, color, height, width }: loadingPropTypes ) {
    return (
        <ReactLoading type={type} color={color} height={height} width={width}/>
    )
}
