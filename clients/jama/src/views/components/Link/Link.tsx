export default function Link({ children, ...props}: any) {
    return (
        <a href={props.url}>
            {children}
        </a>
    )
}