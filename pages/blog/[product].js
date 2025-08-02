import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { product } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Blog Post Page</h1>
      <p className="text-gray-700">Slug from URL: {product}</p>
    </div>
  );
}
