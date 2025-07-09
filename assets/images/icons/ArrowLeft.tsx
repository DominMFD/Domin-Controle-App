import Svg, { Path, SvgProps } from "react-native-svg";

export function ArrowLeft(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path
        d="M5.7375 13.5L14.1375 21.9L12 24L0 12L12 0L14.1375 2.1L5.7375 10.5H24V13.5H5.7375Z"
        fill="#F9FAFB"
      />
    </Svg>
  );
}
