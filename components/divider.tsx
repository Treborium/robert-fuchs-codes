import { iconSize } from "./Theme";

export default function Divider(): React.ReactElement {
  return <hr style={{ width: '1px', height: iconSize, border: 'none', borderLeft: `1px solid hsla(200, 10%, 50%, 100)` }}/>;
}