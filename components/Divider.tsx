import { iconSize } from "./Theme";

interface DividerProps {
  height: string;
}

export default function Divider({ height }: DividerProps): React.ReactElement {
  return <div style={{ height: height, borderLeft: `1px solid hsla(200, 10%, 50%, 100)` }}/>;
} 