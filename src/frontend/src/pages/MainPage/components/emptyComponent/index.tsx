import { useIsFetching } from "@tanstack/react-query";

type EmptyComponentProps = {
  handleOpenModal: () => void;
};

const EmptyComponent = ({ handleOpenModal }: EmptyComponentProps) => {
  const isLoadingFolders = !!useIsFetching({
    queryKey: ["useGetFolders"],
    exact: false,
  });

  return (
    <div className="mt-2 flex w-full items-center justify-center text-center">
      <div className="flex-max-width h-full flex-col">
        <div className="align-center flex w-full justify-center gap-1">
          <span className="text-muted-foreground">
            当前工作夹为空。
        </span>
          <br/>
          <span className="transition-colors hover:text-muted-foreground">
            <button
                onClick={handleOpenModal}
                disabled={isLoadingFolders}
                className="underline"
            >
              点击新建
            </button>
          </span>
          <span className="animate-pulse">🚀</span>
        </div>
      </div>
    </div>
  );
};
export default EmptyComponent;
