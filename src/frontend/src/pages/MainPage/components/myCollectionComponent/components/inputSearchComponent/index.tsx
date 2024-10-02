import { ChangeEvent, KeyboardEvent } from "react";
import ForwardedIconComponent from "../../../../../../components/genericIconComponent";
import { Input } from "../../../../../../components/ui/input";

type InputSearchComponentProps = {
  loading: boolean;
  divClasses?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value: string;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const InputSearchComponent = ({
  loading,
  divClasses,
  onChange,
  onClick,
  value,
  onKeyDown,
}: InputSearchComponentProps) => {
  const pagePath = window.location.pathname;

  const getSearchPlaceholder = () => {
    if (pagePath.includes("flows")) {
      return "查找工作流";
    } else if (pagePath.includes("components")) {
      return "查找组件";
    } else {
      return "查找工作流和组件";
    }
  };

  return (
    <>
      <div className={`${divClasses ? divClasses : "relative h-12 w-[60%]"}`}>
        <Input
          data-testid="search-store-input"
          disabled={loading}
          placeholder={getSearchPlaceholder()}
          className="absolute h-12 pl-5 pr-12"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
        />
        <button
          onClick={onClick}
          disabled={loading}
          className="absolute bottom-0 right-4 top-0 my-auto h-6 cursor-pointer stroke-1 text-muted-foreground"
          data-testid="search-store-button"
        >
          <ForwardedIconComponent
            name={loading ? "Loader2" : "Search"}
            className={loading ? "animate-spin cursor-not-allowed" : ""}
          />
        </button>
      </div>
    </>
  );
};
export default InputSearchComponent;
