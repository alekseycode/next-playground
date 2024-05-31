import Link from "next/link";

export default function NavItem({ name, path, style, currentPath }) {
  let s = "mx-5 text-white " + style;

  return (
    <div className={s}>
      <Link href={path} className={currentPath === path ? "text-lg" : ""}>
        {name}
      </Link>
    </div>
  );
}
