import Svg, { Path, SvgProps } from "react-native-svg";

export function XIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 10 11" {...props}>
      <Path
        d="M1 1.5L9 9.5M1 9.5L9 1.5"
        stroke="#1B1B1B"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
