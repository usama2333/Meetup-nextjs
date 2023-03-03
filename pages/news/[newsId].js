import { useRouter } from "next/router";

const test = () => {
  const router = useRouter();

  const newId = router.query.newsId;
  console.log(newId);

  return (
    <div>
      <h1>This is test page</h1>
    </div>
  )
}

export default test
