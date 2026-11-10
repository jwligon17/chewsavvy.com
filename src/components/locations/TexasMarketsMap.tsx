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

function loadLeaflet() {
  return import("leaflet").then((module) => module as unknown as LeafletApi);
}

function markerMarkup(live: boolean, label: string) {
  const color = live ? "#f47822" : "#007f75";
  return `<span class="market-pin${live ? " market-pin-live" : ""}" aria-label="${label}"><svg viewBox="0 0 34 42" aria-hidden="true"><path d="M17 1C8.2 1 1 8.2 1 17c0 11.7 16 24 16 24s16-12.3 16-24C33 8.2 25.8 1 17 1Z" fill="${color}" stroke="#fff" stroke-width="2"/><path d="M13 10v7M17 10v7M21 10v7M13 14h8M17 17v7" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2.2"/></svg></span>`;
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
