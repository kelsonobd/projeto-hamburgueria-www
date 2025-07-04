import { Link } from "react-router-dom";

interface CardLinkProps {
    to: string;
    children: React.ReactNode;
}

const CardLink = ({ to, children }: CardLinkProps) => {
    return (
        <Link
            to={to}
            className="w-[250px] h-[150px] bg-[#9d0000] hover:bg-[#f40909] transition-all rounded-md border-2 border-white p-4 flex items-center justify-center text-[20px] text-white hover:bg-[#e00000] transition"
        >
            {children}
        </Link>
    );
};

export default CardLink;
