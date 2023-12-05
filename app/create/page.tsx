import getCurrentUser from "../actions/getCurrentUser";
import CreateForm from "@/components/shared/CreateForm";
const page = async () => {
  const user = await getCurrentUser();
  return <CreateForm user={user} />;
};

export default page;
