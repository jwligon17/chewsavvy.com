"use client";

import { useEffect, useRef, useState } from "react";

type LeafletMap = {
  remove: () => void;
  on: (event: string, handler: () => void) => LeafletMap;
  getZoom: () => number;
  getCenter: () => { lat: number; lng: number };
};
type LeafletApi = {
  map: (element: HTMLElement, options: Record<string, unknown>) => { setView: (center: [number, number], zoom: number) => LeafletMap };
  tileLayer: (url: string, options: Record<string, unknown>) => { addTo: (map: LeafletMap) => void };
  divIcon: (options: Record<string, unknown>) => unknown;
  marker: (coordinates: [number, number], options: Record<string, unknown>) => { addTo: (map: LeafletMap) => { bindPopup: (content: string, options: Record<string, unknown>) => void } };
  control: { zoom: (options: Record<string, unknown>) => { addTo: (map: LeafletMap) => void } };
};

const markets = [
  { name: "Abilene Area", status: "Live", coordinates: [32.4487, -99.7331] as [number, number], live: true },
  { name: "San Angelo", status: "Future Market", coordinates: [31.4638, -100.437] as [number, number] },
  { name: "Brownwood", status: "Future Market", coordinates: [31.7093, -98.9912] as [number, number] },
  { name: "Lubbock", status: "Future Market", coordinates: [33.5779, -101.8552] as [number, number] },
  { name: "Midland", status: "Future Market", coordinates: [31.9973, -102.0779] as [number, number] },
  { name: "Odessa", status: "Future Market", coordinates: [31.8457, -102.3676] as [number, number] },
];

const brandedForkPath = "M560.257 435.887C557.894 422.433 549.978 415.691 547.421 414.209C546.638 413.755 544.840 412.713 542.886 413.241C541.748 413.549 540.892 414.299 540.471 414.876C538.743 417.245 540.893 421.443 542.576 425.319C549.153 440.468 547.263 447.665 546.825 449.121C546.514 450.156 545.802 452.416 544.119 452.867C542.340 453.343 540.507 451.524 540.251 451.271C538.403 449.438 537.859 444.492 537.859 444.492C537.327 439.817 537.061 437.479 535.555 436.298C534.004 435.080 531.218 434.958 529.721 436.211C527.636 437.957 528.098 442.336 528.626 447.341C528.908 450.004 529.289 451.347 528.440 452.941C527.566 454.585 525.594 456.116 523.824 455.751C523.340 455.651 521.947 455.221 520.543 451.593C519.296 448.372 518.452 443.702 519.631 437.090C520.601 431.651 522.216 428.958 520.556 426.607C520.354 426.321 519.386 425.023 517.808 424.767C517.306 424.685 515.915 424.576 513.750 426.326C510.322 429.096 509.131 433.148 508.880 434.041C507.044 440.582 501.271 461.156 513.864 473.774C515.463 475.376 517.798 477.291 521.138 478.920C521.944 479.430 523.114 480.087 524.596 480.678C522.887 483.463 521.004 486.171 518.946 488.802C517.602 490.521 516.184 492.182 514.729 493.815C511.956 496.834 508.816 499.566 505.340 501.975L501.060 504.582C499.380 505.449 497.619 506.193 495.849 506.872C494.052 507.589 492.461 508.113 491.080 508.448C489.670 508.818 487.946 509.062 485.954 509.272C484.288 509.443 482.671 509.475 481.104 509.369C479.267 509.229 477.406 508.894 475.567 508.457C475.335 508.453 474.957 508.333 474.432 508.100C473.879 507.903 473.326 507.706 472.764 507.443C472.240 507.210 471.825 507.062 471.613 506.956C471.548 506.964 471.475 506.906 471.365 506.820C471.227 506.772 471.052 506.694 470.877 506.616C470.702 506.538 470.556 506.424 470.381 506.346C470.205 506.268 470.096 506.182 470.023 506.125L469.921 506.104C468.957 505.527 468.051 504.877 467.173 504.190C466.296 503.503 465.447 502.780 464.655 501.984C464.508 501.870 464.046 501.331 463.274 500.432C462.503 499.534 461.663 498.347 460.828 496.927L460.791 496.899L460.784 496.834C460.776 496.768 460.695 496.646 460.613 496.523C460.532 496.401 460.488 496.307 460.407 496.185C460.326 496.062 460.273 495.903 460.192 495.781C460.111 495.659 460.066 495.565 460.058 495.500C459.739 494.778 459.455 494.085 459.253 493.514C459.051 492.943 458.805 492.279 458.579 491.513C458.510 491.223 458.426 490.803 458.370 490.348C458.314 489.891 458.267 489.500 458.211 489.044C458.193 488.616 458.124 488.327 458.100 488.131C458.021 487.479 458.054 486.681 458.196 485.671C458.337 484.662 458.474 483.884 458.598 483.274C458.845 482.053 458.702 480.879 458.204 479.783C457.678 478.722 456.972 477.816 455.984 477.044C455.034 476.300 453.984 475.832 452.807 475.679C450.861 475.453 449.227 475.884 447.876 477.009C447.423 477.361 447.014 477.809 446.670 478.247C445.956 479.162 445.423 480.219 445.175 481.440C444.205 486.223 444.388 490.964 445.722 495.664C447.057 500.363 449.265 504.625 452.374 508.413C454.322 510.821 456.499 512.937 458.840 514.768C463.411 518.344 468.740 520.803 474.723 522.123C479.265 523.023 483.916 523.183 488.601 522.544C493.323 521.934 497.807 520.725 502.087 518.945C506.556 517.076 510.643 514.790 514.406 512.015C518.169 509.240 521.595 506.142 524.711 502.685C526.118 501.203 527.585 499.535 529.063 497.673C530.655 495.664 532.031 493.716 533.217 491.888C535.466 488.636 537.540 485.306 539.468 481.862C539.741 481.374 539.997 480.881 540.267 480.392C543.280 478.810 547.351 476.163 551.085 471.836C556.982 465.002 558.693 457.848 559.630 453.715C560.295 450.785 561.719 444.212 560.257 435.887Z";

function loadLeaflet() {
  return import("leaflet").then((module) => module as unknown as LeafletApi);
}

function markerMarkup(live: boolean, label: string) {
  const color = live ? "#f47822" : "#007f75";
  return `<span class="market-pin${live ? " market-pin-live" : ""}" aria-label="${label}"><svg viewBox="0 0 34 42" aria-hidden="true"><path d="M17 1C8.2 1 1 8.2 1 17c0 11.7 16 24 16 24s16-12.3 16-24C33 8.2 25.8 1 17 1Z" fill="${color}" stroke="#fff" stroke-width="2"/><svg x="9" y="8" width="16" height="16" viewBox="444 412 118 112"><path d="${brandedForkPath}" fill="#fff"/></svg></svg></span>`;
}

export function TexasMarketsMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const [loadError, setLoadError] = useState(false);
  useEffect(() => {
    let cancelled = false;
    loadLeaflet().then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return;
      const map = L.map(containerRef.current, { zoomControl: false, scrollWheelZoom: false, minZoom: 5, maxZoom: 11 }).setView([31.45, -99.65], 6);
      mapRef.current = map;
      const updateMapState = () => {
        if (!containerRef.current) return;
        const center = map.getCenter();
        containerRef.current.dataset.mapZoom = String(map.getZoom());
        containerRef.current.dataset.mapCenter = `${center.lat.toFixed(5)},${center.lng.toFixed(5)}`;
      };
      map.on("zoomend", updateMapState).on("moveend", updateMapState);
      updateMapState();
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
      L.control.zoom({ position: "bottomright" }).addTo(map);
      markets.forEach((market) => {
        const live = Boolean(market.live);
        const icon = L.divIcon({ className: "chewsavvy-market-marker", html: markerMarkup(live, `${market.name}: ${market.status}`), iconSize: [34, 42], iconAnchor: [17, 41], popupAnchor: [0, -37] });
        const copy = live ? "Chewsavvy is currently focused on restaurant discovery and local dining savings in the Abilene area." : "Chewsavvy is exploring future growth in this Texas market.";
        const popup = `<div class="market-popup"><span>${market.status}</span><strong>${market.name}</strong><p>${copy}</p></div>`;
        L.marker(market.coordinates, { icon, title: market.name, keyboard: true }).addTo(map).bindPopup(popup, { maxWidth: 270, closeButton: true });
      });
    }).catch(() => { if (!cancelled) setLoadError(true); });
    return () => { cancelled = true; mapRef.current?.remove(); mapRef.current = null; };
  }, []);

  return <div className="market-map-shell">
    <div className="market-map-heading"><div><p className="eyebrow">Texas market map</p><h2>Live locally. Growing intentionally.</h2></div><div className="market-legend" aria-label="Market status legend"><span><i className="legend-dot legend-live" /> Live now</span><span><i className="legend-dot legend-future" /> Future market</span></div></div>
    <div className="market-map-frame"><div ref={containerRef} className="market-map" aria-label="Interactive map of Chewsavvy markets in Texas" />{loadError ? <div className="market-map-fallback"><strong>The interactive map could not load.</strong><p>Abilene is live. San Angelo, Brownwood, Lubbock, Midland, and Odessa are future markets.</p></div> : null}</div>
    <p className="map-instructions">Drag to explore Texas. Use the controls to zoom, then select a marker for market details.</p>
  </div>;
}
