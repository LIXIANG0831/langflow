import ForwardedIconComponent from "../../../../../../components/genericIconComponent";

const GeneralPageHeaderComponent = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-4 space-y-0.5">
        <div className="flex w-full flex-col">
          <h2 className="flex items-center text-lg font-semibold tracking-tight">
            通用
            <ForwardedIconComponent
              name="SlidersHorizontal"
              className="ml-2 h-5 w-5 text-primary"
            />
          </h2>
          <p className="text-sm text-muted-foreground">
            管理与帐户相关的设置。
          </p>
        </div>
      </div>
    </>
  );
};
export default GeneralPageHeaderComponent;
