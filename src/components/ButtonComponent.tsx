interface ButtonProps {
    name: string,
    logo: React.ReactNode;
}

export default function ButtonComponent(props: ButtonProps) {
    return (
        <div>
            <button>
                <span className="btn-logo">
                    {props.logo}
                </span>
                <span className="btn-name">
                    {props.name}
                </span>
            </button>
        </div>
    );
}