import { useEffect, useRef } from "react"
import maplibregl, { type Map as MapType } from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

type EventPoint = {
    id: string; // 1038
    title: string;
    latitude: number;
    longitude: number;
    href: string; // /events/1038
    venue_text?: string;
    start?: string;
}

const EventMap = ({ points }: { points: EventPoint[] }) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const mapRef = useRef<MapType | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        if (mapRef.current) return

        const map = new maplibregl.Map({
            container: containerRef.current,
            style: {
                version: 8,
                sources: {
                    "raster-tiles": {
                        type: "raster",
                        tiles: [
                            "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        ],
                        tileSize: 256,
                        attribution:
                            '© OpenStreetMap contributors',
                    },
                },
                layers: [
                    {
                        id: "osm-tiles",
                        type: "raster",
                        source: "raster-tiles",
                    },
                ],
            },
            center: [139.6917, 35.6895], // Tokyo
            zoom: 5,
        })

        map.addControl(new maplibregl.NavigationControl(), "top-right")

        // Markerを追加
        const markers: maplibregl.Marker[] = []
        for (const p of points) {
            const popupHtml = `
                <div style="font-size:14px;line-height:1.4">
                    <div style="font-weight:700;margin-bottom:4px;">${escapeHtml(p.title)}</div>
                    ${p.start ? `<div>${escapeHtml(p.start)}</div>` : ""}
                    ${p.venue_text ? `<div>${escapeHtml(p.venue_text)}</div>` : ""}
                    <div style="margin-top:6px;">
                        <a href="${p.href}">詳細へ</a>
                    </div>
                </div>
            `
            const popup = new maplibregl.Popup({ offset: 18 }).setHTML(popupHtml)
            const marker = new maplibregl.Marker()
                .setLngLat([p.longitude, p.latitude])
                .setPopup(popup)
                .addTo(map)
            markers.push(marker)
        }

        // 全マーカーを含むように画面を調整
        if (points.length > 0) {
            const bounds = new maplibregl.LngLatBounds()
            for (const p of points) {
                bounds.extend([p.longitude, p.latitude])
            }
            map.fitBounds(bounds, { padding: 50 })
        }

        mapRef.current = map

        return () => {
            markers.forEach((m) => m.remove())
            map.remove()
            mapRef.current = null
        }
    }, [points])

    return (
        <div
            ref={containerRef}
            style={{ 
                width: "100%", 
                height: "70vh", 
                borderRadius: 12, 
                overflow: "hidden",
                border: "1px solid #ddd",
            }}
        />
    )
}

const escapeHtml = (s: string) => {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

export default EventMap