interface ButtonProps {
    name: string,
    logo: React.ReactNode,
    link: string
}

export default function ButtonComponent(props: ButtonProps) {
    return (
        <div>
            <a className="button-style" href={props.link} target="_blank" rel="noopener noreferrer">
                <span className="btn-logo">
                    {props.logo}
                </span>
                <span className="btn-name">
                    {props.name}
                </span>
            </a>
        </div >
    );
}