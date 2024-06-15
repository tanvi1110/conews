import Link from "next/link";
import NavLinks from "./NavLinks"

type Props = {
    category: string;
    isActive: boolean
}

const NavLink = ({category, isActive}: Props) => {
  return (
  
    <Link href={`/news/${category}`} 
    className={`navlink ${isActive && "underline decoration-red-500 underline-offset-4 font-bold "}`}>
        {category}
    </Link>
)
}

export default NavLink
