import { iconSize } from "./Theme";

export default function Divider(): React.ReactElement {
  return <div style={{ height: iconSize, borderLeft: `1px solid hsla(200, 10%, 50%, 100)` }}/>;
}