
export default function useRandomHslColor (): string {
  const maxHueValue = 360;
  const hue = Math.floor(Math.random() * maxHueValue);
  return `hsl(${hue}, 60%, 70%)`;
}