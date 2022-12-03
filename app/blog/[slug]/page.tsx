export default function Page({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return (
    <>
      <h1>Blog Detail {params.slug}</h1>
    </>
  );
}
