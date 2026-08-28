"use client";

import { useEffect, useState } from "react";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/1+Rue+du+Transvaal,+69008+Lyon/@45.7470705,4.8317887,13.94z/data=!4m6!3m5!1s0x47f4c1e5fcfa76d7:0xd5e55b6f22c80e19!8m2!3d45.7381121!4d4.8782562!16s%2Fg%2F11crvly0hw?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D";

export const APPLE_MAPS_URL =
  "https://maps.apple.com/?address=1+Rue+du+Transvaal,+69008+Lyon&ll=45.7381121,4.8782562&q=1+Rue+du+Transvaal";

export function getMapUrl() {
  if (typeof window === "undefined") return GOOGLE_MAPS_URL;

  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isAppleDevice =
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ||
    (/Macintosh/.test(ua) && /Safari/.test(ua) && !/Chrome/.test(ua));

  return isAppleDevice ? APPLE_MAPS_URL : GOOGLE_MAPS_URL;
}

export default function DefaultMapLink({
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}) {
  const [href, setHref] = useState(GOOGLE_MAPS_URL);

  useEffect(() => {
    setHref(getMapUrl());
  }, []);

  return (
    <a href={href} target={target} rel={rel} className={className} {...props}>
      {children}
    </a>
  );
}
