interface Props {
    children?: React.ReactNode | React.ReactNode[];
    image: string;
    className?: string;
}

const ParallaxTransparentBackground = ({ children, image, className = "" }: Props) => (
    <section
        className={`relative h-[600px] bg-cover bg-fixed bg-center bg-no-repeat md:h-96 ${className}`}
        style={{ backgroundImage: `url(${image})` }}
    >
        <div className="absolute z-10 h-full w-full bg-black opacity-50"></div>
        <div className="absolute z-40 ">{children}</div>
    </section>
);

export { ParallaxTransparentBackground };
