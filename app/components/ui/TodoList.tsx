import { useEffect } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";

const TodoList = ({
  sharedUserFullName = "",
  owerUserId = "",
  loading = false,
  todoListData = [],
  isReadOnly = false,
}) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => {
    const shareLink = `https://example.com/share/${sharedUserFullName}`;
    copy(shareLink)
      .then(() => {
        window.alert("Copied!" + shareLink);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  useEffect(() => {
    console.log("dd");
  }, []);

  return (
    <section className='min-h-[70vh] bg-[#69CFCF]'>
      <div className='w-full max-w-[800px] p-[20px] mx-auto'>
        <article className='flex flex-row justify-between items-center'>
          <div className='font-bold text-[32px]'>
            {sharedUserFullName && <div>{sharedUserFullName}</div>}
            Things to do:
          </div>
          {owerUserId && (
            <div
              onClick={() => handleCopy()}
              className='font-bold text-[32px] flex flex-row items-center cursor-pointer'
            >
              Share
              <IoShareSocialOutline />
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default TodoList;
