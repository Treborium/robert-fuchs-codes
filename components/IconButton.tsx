interface IconButtonProps {
  icon: React.ReactElement;
  href: string;
  ariaLabel: string;
}

export default function IconButton(props: IconButtonProps): React.ReactElement {
  const { icon, href, ariaLabel } = props;
  return (
    <button aria-label={ariaLabel} style={{ border: 'none', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <a href={href} target='_blank' rel='noopener noreferrer' children={icon} aria-label={ariaLabel}/>
    </button>
  );
}