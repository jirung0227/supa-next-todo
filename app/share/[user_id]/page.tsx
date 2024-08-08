interface SharePageProps {
  params: { user_id: string };
  searchParams: {};
}

const Page = async (props: SharePageProps) => {
  const userId = props.params.user_id;
  return <div>share</div>;
};

export default Page;
