import { getUser } from "@/actions/auth/user.action";
import TodoContainer from "./components/TodoContainer";
import { DotLoader } from "react-spinners";

export default async function Home() {
  const user = await getUser({ serverComponent: true });
  return (
    <main>
      {user ? (
        <TodoContainer owerUserId={user?.id} />
      ) : (
        <>
          <div>
            <div className="flex flex-col items-center mt-12">
              <DotLoader />
              <div className="font-bold my-2">Please Login First</div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
