import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'

export default function Dummy(props){
    console.log('Response type:', typeof props.response, 'Value:', props.response)
    return (
        <>
            <Markdown children={props.response} remarkPlugins={[remarkGfm]}/>
        </>
    )
}