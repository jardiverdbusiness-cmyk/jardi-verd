import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/services-data";

type IconProps = SVGProps<SVGSVGElement>;

export function LeafIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M20 4C10 4 4 10 4 18c0 1.1.9 2 2 2 8 0 14-6 14-16z" strokeLinejoin="round" />
      <path d="M6 18C10 14 14 10 19 5" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.31-1.39a9.87 9.87 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.31-1.93 1.38-.5.07-1.06.1-2.5-.53-2.1-.9-3.47-3.02-3.58-3.16-.1-.14-.85-1.13-.85-2.15 0-1.02.53-1.52.72-1.73.19-.2.42-.25.56-.25.14 0 .28 0 .4.01.13.01.3-.05.47.36.18.42.6 1.46.66 1.56.06.1.1.22.02.36-.08.14-.12.22-.24.34-.12.13-.25.28-.36.38-.12.11-.24.24-.1.47.14.24.62 1.02 1.33 1.65.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.53-.12.22.08 1.38.65 1.62.77.24.12.4.18.46.28.06.1.06.58-.18 1.26z" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5z" />
    </svg>
  );
}

export function ScrubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M4 20c2-6 4-9 4-13a4 4 0 0 1 8 0c0 4 2 7 4 13" strokeLinecap="round" />
      <path d="M4 20h16" strokeLinecap="round" />
      <path d="M9 20c0-3 1-6 3-9" strokeLinecap="round" />
    </svg>
  );
}

export function TreeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M12 2 6 11h3l-4 6h5v5h4v-5h5l-4-6h3L12 2z" strokeLinejoin="round" />
    </svg>
  );
}

export function LeafBinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M5 8h14l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 8z" strokeLinejoin="round" />
      <path d="M3 8h18M9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" strokeLinecap="round" />
      <path d="M9 12c2 1 4 1 6-1" strokeLinecap="round" />
    </svg>
  );
}

export function BroomIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M15 3 6 12" strokeLinecap="round" />
      <path d="M13 5l6 6-2 2-6-6z" strokeLinejoin="round" />
      <path d="M6 12 2 21l4-1.5L9 16l1-3z" strokeLinejoin="round" />
    </svg>
  );
}

export function WateringCanIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M4 11h9a3 3 0 0 1 3 3v1H4z" strokeLinejoin="round" />
      <path d="M4 15v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3" />
      <path d="M16 10l5-2M18 8l2 2M17 12l3 1" strokeLinecap="round" />
    </svg>
  );
}

export function DesignIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M3 20 20 3M14 3h7v7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="2.4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" strokeLinecap="round" />
    </svg>
  );
}

export const serviceIconMap: Record<ServiceIcon, (props: IconProps) => JSX.Element> = {
  scrub: ScrubIcon,
  tree: TreeIcon,
  "leaf-bin": LeafBinIcon,
  broom: BroomIcon,
  "watering-can": WateringCanIcon,
  design: DesignIcon,
  shield: ShieldIcon,
  sparkles: SparklesIcon,
};
