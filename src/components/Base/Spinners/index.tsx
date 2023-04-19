import { CSSProperties } from "react";
import {
  BarLoader,
  BeatLoader,
  CircleLoader,
  FadeLoader,
  BounceLoader,
} from "react-spinners";
import { LoaderHeightWidthProps, LoaderSizeProps } from "react-spinners/helpers/props";

type SpinnnersPropsType = LoaderHeightWidthProps & LoaderSizeProps
interface IProps extends SpinnnersPropsType {
  type: "bar" | "fade" | "beat" | "circle";
}
const SpinnerInterface = ({ type, color, loading, size }: IProps) => {
  const override: CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };
  const props = { color, loading, size };
  switch (type) {
    case "bar":
      return <BarLoader cssOverride={override} { ...props} />;
    case "fade":
      return <FadeLoader cssOverride={override} { ...props} />;
    case "beat":
      return <BeatLoader cssOverride={override} { ...props} />;
    case "circle":
      return <CircleLoader  cssOverride={override} {...props} />;
    default:
      return <BounceLoader cssOverride={override} {...props} />;
  }
};

const Spinners = ({
  type = "beat",
  loading,
  size = 25,
  color = "#36d7b7",
}: IProps) => {
  return (
    <div className="sweet-loading">
      <SpinnerInterface
        color={color}
        loading={loading}
        size={size}
        type={type}
      />
    </div>
  );
};

export default Spinners;
