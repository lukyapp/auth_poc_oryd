type Props = {
    pageName: string
}

export const Default = ({pageName}: Props) => {
    return (
        <div className="page">
            <h1>{pageName}</h1>
            {/* Add your code form here */}
        </div>
    );
};
