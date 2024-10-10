import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Page Not Found</h1>
      <p>
        The page you{"'re"} looking for doesn{"'t"} exist.
      </p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
