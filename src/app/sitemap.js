import getAllPosts from "@/serverAction/getAllPosts";

export default async function sitemap() {
  const BASE_URL = "https://amlak-kavir.vercel.app";
  let postRoutes = [];
  const staticRoutes = [
    "",
    "/signIn",
    "/signUp",
    "/admin",
    "/dashboard",
    "/residential-post",
  ];

  const allPosts = await getAllPosts();

  const routes = staticRoutes.map((item) => ({
    url: `${BASE_URL}${item}`,
    lastModified: new Date().toString(),
  }));

  if (allPosts.data) {
    postRoutes = allPosts?.data.map((item) => ({
      url: `${BASE_URL}/residential-details/${item._id}`,
      lastModified: new Date().toString(),
    }));
  }

  return [...routes, ...postRoutes];
}
