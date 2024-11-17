import { Suspense } from "react";

import AddPostPage from "@/template/AddPostPage";
import Loader from "@/element/Loader";

function AddPost() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AddPostPage />
      </Suspense>
    </>
  );
}

export default AddPost;
