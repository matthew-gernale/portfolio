import React from 'react';
import { Smartphone, Mail } from 'lucide-react';
import FbIcon from '../assets/png-icons/fb-icon.png';
import GithubIcon from '../assets/png-icons/github-icon.png';
import IgIcon from '../assets/png-icons/ig-icon.png';
import LinkedInIcon from '../assets/png-icons/linkedin-icon.png';
import mattProfile from '../assets/images/matt-with-laptop.jpg'

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom Pin Icon
const pinIcon = L.divIcon({
    html: `
    <div style="
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #22c55e; /* green-500 */
      box-shadow: 0 0 4px rgba(0,0,0,0.3);
    ">
      <img 
        src="${mattProfile}" 
        style="width: 100%; height: 100%; object-fit: cover;" 
        alt="Matt Pin"
      />
    </div>
  `,
    className: '', // Remove default leaflet marker styles
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// GeoJSON example (PUP Sta. Mesa coords)
const locationGeoJson = {
    type: 'Feature',
    properties: {
        name: 'Matt Gernale - Location'
    },
    geometry: {
        type: 'Point',
        coordinates: [121.03509521484375, 14.907795906066895] // [lng, lat]
    }
};

function FooterSection() {
    const position = [14.907795906066895, 121.03509521484375]; // [lat, lng]

    return (
        <footer className="bg-slate-800 text-white px-6 py-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex-row justify-between gap-8">

                {/* Left: Contact Info + Socials */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                            <Mail className="w-4 h-4" />
                            <span>matthewgernale26@gmail.com</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                            <Smartphone className="w-4 h-4" />
                            <span>+63 985 864 8265</span>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4 pt-2">
                        <a
                            href="https://facebook.com/matt4youu"
                            target="_blank"
                            rel="noreferrer">
                            <img src={FbIcon} alt="social-icon" className="footer-icon w-14 p-2" />
                        </a>

                        <a
                            href="https://instagram.com/matt4youu/"
                            target="_blank"
                            rel="noreferrer">
                            <img src={IgIcon} alt="social-icon" className="footer-icon w-14 p-2" />
                        </a>

                        <a
                            href="https://github.com/matthew-gernale"
                            target="_blank"
                            rel="noreferrer">
                            <img src={GithubIcon} alt="social-icon" className="footer-icon w-14 p-2" />
                        </a>
                        <a
                            href="https://linkedin.com/in/atthew-gernale/"
                            target="_blank"
                            rel="noreferrer">
                            <img src={LinkedInIcon} alt="social-icon" className="footer-icon w-14 p-2" />
                        </a>
                    </div>
                </div>

                {/* Right: Map Using GeoJSON */}
                <div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden shadow-lg z-[1]">
                    <MapContainer
                        center={position}
                        zoom={16}
                        scrollWheelZoom={false}
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer
                            attribution='&copy; OpenStreetMap'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {/* GeoJSON pin */}
                        <GeoJSON
                            data={locationGeoJson}
                            pointToLayer={(feature, latlng) =>
                                L.marker(latlng, { icon: pinIcon }).bindPopup(feature.properties.name)
                            }
                        />
                    </MapContainer>
                </div>
            </div>
        </footer>
    );
}

export { FooterSection };
