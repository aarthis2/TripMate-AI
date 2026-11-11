

// Friends illana Family select pannuna 'Number of Persons' box automatic-a open aagum
function togglePersonInput() {
  const tripType = document.getElementById('tripType').value;
  const personGroup = document.getElementById('personInputGroup');
  
  if (!personGroup) return;

  if (tripType === 'Friends Trip' || tripType === 'Family Trip') {
    personGroup.style.display = 'block';
  } else {
    personGroup.style.display = 'none';
  }
}// ==========================================
// 1. GLOBAL 50 CITIES & UNIQUE HOTELS DATABASE
// ==========================================
const cities50 = [
  "Madurai", "Kodaikanal", "Ooty", "Chennai", "Goa", "Munnar", "Coimbatore", "Bangalore", "Mysore", "Tirupati",
  "Kanyakumari", "Rameshwaram", "Tanjore", "Trichy", "Pondicherry", "Alleppey", "Cochin", "Varkala", "Wayanad", "Coorg",
  "Hyderabad", "Vizag", "Manali", "Shimla", "Dharamshala", "Jaipur", "Udaipur", "Agra", "Varanasi", "Rishikesh",
  "Delhi", "Mumbai", "Pune", "Mahabaleshwar", "Lonavala", "Kolkata", "Darjeeling", "Gangtok", "Shillong", "Amritsar",
  "Srinagar", "Gulmarg", "Leh Ladakh", "Nainital", "Mussoorie", "Gokarna", "Chikmagalur", "Hampi", "Badami", "Mangalore"
];

// Unique Hotel Names, Locations & Contact Numbers for all 50 Cities
const hotelDetailsMap = {
  "Madurai": { name: "Heritage Madurai Regency & Spa", loc: "Near Meenakshi Temple, West Masi Street, Madurai", phone: "+91 452 2345678" },
  "Tanjore": { name: "Svatma - Heritage Luxury Hotel", loc: "Macdonald Road, Thanjavur", phone: "+91 436 2274444" },
  "Kodaikanal": { name: "The Carlton Mist Valley Resort", loc: "Lake Road, Near Kodaikanal Lake, Kodaikanal", phone: "+91 454 2240056" },
  "Ooty": { name: "Savoy - IHCL World Heritage Hotel", loc: "Sylks Road, Near Botanical Garden, Ooty", phone: "+91 423 2244142" },
  "Chennai": { name: "The Leela Palace Marina Bay", loc: "MRC Nagar, Raja Annamalaipuram, Chennai", phone: "+91 44 3366 1234" },
  "Trichy": { name: "SRM Hotel Trichy", loc: "Khajamalai, Near Rockfort, Tiruchirappalli", phone: "+91 431 2422244" },
  "Rameshwaram": { name: "Daiwik Hotels Rameshwaram", loc: "National Highway 49, Near Temple, Rameshwaram", phone: "+91 457 3222333" },
  "Kanyakumari": { name: "The Seashore Hotel", loc: "Near Vivekananda Rock Memorial Coast, Kanyakumari", phone: "+91 465 2246250" },
  "Goa": { name: "Taj Exotica Resort & Spa Goa", loc: "Benaulim Beach, South Goa", phone: "+91 832 6683333" },
  "Munnar": { name: "Chandys Windy Woods Resort", loc: "Chithirapuram PO, Munnar Hills", phone: "+91 486 4264600" },
  "Coimbatore": { name: "Vivanta Coimbatore", loc: "Race Course Road, Gopalapuram, Coimbatore", phone: "+91 422 6681000" },
  "Bangalore": { name: "The Oberoi Grand Palace", loc: "MG Road, Near Cubbon Park, Bangalore", phone: "+91 80 2558 5858" },
  "Mysore": { name: "Lalitha Mahal Palace Hotel", loc: "Hebbal Ring Road, Near Chamundi Hills, Mysore", phone: "+91 821 2470400" },
  "Tirupati": { name: "Marasa Sarovar Premiere", loc: "Renigunta Road, Tirupati", phone: "+91 877 2266999" },
  "Pondicherry": { name: "Palais de Mahe - CGH Earth", loc: "White Town, Near Promenade Beach, Pondicherry", phone: "+91 413 2227355" },
  "Alleppey": { name: "Punnamada Lake Resort", loc: "Punnamada, Finishing Point Road, Alleppey", phone: "+91 477 2233666" },
  "Cochin": { name: "Brunton Boatyard - CGH Earth", loc: "Fort Kochi, Waterfront, Kochi", phone: "+91 484 2217855" },
  "Varkala": { name: "The Gateway Hotel Cliff", loc: "North Cliff, Near Janardanaswamy Temple, Varkala", phone: "+91 470 2603000" },
  "Wayanad": { name: "Vythiri Village Luxury Resort", loc: "Vythiri, Wayanad Hills", phone: "+91 493 6256700" },
  "Coorg": { name: "The Tamara Coorg", loc: "Kabbinakad Estate, Napoklu, Coorg", phone: "+91 827 2238400" },
  "Hyderabad": { name: "Taj Falaknuma Palace", loc: "Engine Bowli, Falaknuma, Hyderabad", phone: "+91 40 6629 8585" },
  "Vizag": { name: "The Park Visakhapatnam", loc: "Beach Road, Near Lawson's Bay, Visakhapatnam", phone: "+91 891 2754488" },
  "Manali": { name: "The Himalayan Resort & Spa", loc: "Hadimba Temple Road, Manali", phone: "+91 190 2253040" },
  "Shimla": { name: "The Oberoi Cecil Shimla", loc: "Chaura Maidan, Mall Road, Shimla", phone: "+91 177 2804848" },
  "Dharamshala": { name: "Norbu House", loc: "McLeod Ganj, Near Dalai Lama Temple, Dharamshala", phone: "+91 189 2221333" },
  "Jaipur": { name: "Rambagh Palace Jaipur", loc: "Bhawani Singh Road, Jaipur", phone: "+91 141 2385700" },
  "Udaipur": { name: "The Oberoi Udaivilas", loc: "Haridas Ji Magri, Lake Pichola, Udaipur", phone: "+91 294 2433300" },
  "Agra": { name: "The Oberoi Amarvilas", loc: "Taj East Gate Road, Near Taj Mahal, Agra", phone: "+91 562 2231515" },
  "Varanasi": { name: "BrijRama Palace Varanasi", loc: "Darbhanga Ghat, Dashashwamedh, Varanasi", phone: "+91 542 2450444" },
  "Rishikesh": { name: "Ananda in the Himalayas", loc: "Palace Estate, Narendra Nagar, Rishikesh", phone: "+91 137 8227500" },
  "Delhi": { name: "The Taj Mahal Hotel New Delhi", loc: "1, Mansingh Road, New Delhi", phone: "+91 11 2302 6162" },
  "Mumbai": { name: "The Taj Mahal Palace Mumbai", loc: "Colaba, Near Gateway of India, Mumbai", phone: "+91 22 6665 3366" },
  "Pune": { name: "The Corinthians Resort & Club", loc: "Nyati County, NIBM Annex, Pune", phone: "+91 20 2695 2222" },
  "Mahabaleshwar": { name: "Le Meridien Mahabaleshwar Resort", loc: "Metgutad, Mahabaleshwar", phone: "+91 216 8260100" },
  "Lonavala": { name: "The Dukes Retreat Lonavala", loc: "Old Pune-Mumbai Highway, Khandala, Lonavala", phone: "+91 211 4273300" },
  "Kolkata": { name: "The Oberoi Grand Kolkata", loc: "15, Jawaharlal Nehru Road, Kolkata", phone: "+91 33 2249 2323" },
  "Darjeeling": { name: "Mayfair Darjeeling", loc: "Opposite Raj Bhavan, Circular Road, Darjeeling", phone: "+91 354 2256376" },
  "Gangtok": { name: "Mayfair Spa Resort & Casino", loc: "Ranipool, Gangtok, Sikkim", phone: "+91 359 2250555" },
  "Shillong": { name: "Ri Kynjai - Serenity by the Lake", loc: "Umiam Lake, Shillong", phone: "+91 364 2536111" },
  "Amritsar": { name: "Taj Swarna Amritsar", loc: "Majitha Verka Bypass, Amritsar", phone: "+91 183 5058888" },
  "Srinagar": { name: "The Lalit Grand Palace Srinagar", loc: "Gupkar Road, Srinagar", phone: "+91 194 2501001" },
  "Gulmarg": { name: "The Khyber Himalayan Resort", loc: "Near Gondola Cable Car, Gulmarg", phone: "+91 195 4254666" },
  "Leh Ladakh": { name: "The Grand Dragon Ladakh", loc: "Old Road, Sheynam, Leh Ladakh", phone: "+91 198 2257777" },
  "Nainital": { name: "The Manu Maharani Nainital", loc: "Pathfinder Hall, Hill Sides, Nainital", phone: "+91 594 2237333" },
  "Mussoorie": { name: "JW Marriott Walnut Grove Resort", loc: "Village Siya, Kempty Fall Road, Mussoorie", phone: "+91 135 2635700" },
  "Gokarna": { name: "SwaSwara - CGH Earth", loc: "Om Beach, Donibhail, Gokarna", phone: "+91 838 6257131" },
  "Chikmagalur": { name: "The Serai Chikmagalur", loc: "K M Road, Mugthihalli, Chikmagalur", phone: "+91 826 2255000" },
  "Hampi": { name: "Evolve Back Kamalapura Palace", loc: "Near UNESCO Ruins, Kamalapura, Hampi", phone: "+91 839 4254800" },
  "Badami": { name: "Clarks Inn Badami", loc: "Near Badami Cave Temples, Station Road, Badami", phone: "+91 835 4220555" },
  "Mangalore": { name: "The Ocean Pearl Mangalore", loc: "Navabharat Circle, Kodialbail, Mangalore", phone: "+91 824 2419000" }
};

const sampleHotelImgs = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600"
];

// City Database Mapping
const cityDatabase = {};
cities50.forEach((city, idx) => {
  const dist = 150 + idx * 22;
  const hotelInfo = hotelDetailsMap[city] || { name: `${city} Grand Luxury Resort`, loc: `${city} Central Hub`, phone: `+91 98400 ${10000 + idx}` };
  
  cityDatabase[city] = {
    lat: 9.5 + (idx * 0.4),
    lon: 76.5 + (idx * 0.4),
    dist: dist,
    bus: Math.round(dist * 1.5),
    train: Math.round(dist * 0.9),
    flight: Math.round(dist * 4.5 + 1000),
    hotelName: hotelInfo.name,
    location: hotelInfo.loc,
    desc: `Experience 5-star premium hospitality at ${hotelInfo.name} located in ${city} with modern amenities, scenic views, and 24/7 service.`,
    phone: hotelInfo.phone,
    single: `₹${1400 + (idx * 40)}`,
    double: `₹${2600 + (idx * 70)}`,
    hotelImg: sampleHotelImgs[idx % sampleHotelImgs.length]
  };
});

// ==========================================
// 2. REAL SIGHTSEEING SPOTS DATABASE WITH AI LOOK
// ==========================================
const cityPlacesDatabase = {
  "Madurai": [
    { name: "Meenakshi Amman Temple", desc: "World famous historic Tamil architecture temple.", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500" },
    { name: "Thirumalai Nayakkar Mahal", desc: "17th-century palace built by King Thirumalai Nayak.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500" },
    { name: "Gandhi Memorial Museum", desc: "Historical museum containing Gandhi's garment.", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500" },
    { name: "Alagar Kovil", desc: "Scenic temple situated at the foot of Vishnu hills.", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500" },
    { name: "Vandiyur Mariamman Teppakulam", desc: "Huge temple tank famous for float festival.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" }
  ],
  "Tanjore": [
    { name: "Brihadeeswarar Temple (Big Temple)", desc: "UNESCO World Heritage architectural marvel built by Raja Raja Chola.", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500" },
    { name: "Thanjavur Royal Palace", desc: "Historic palace complex housing art galleries and artifacts.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500" },
    { name: "Saraswathi Mahal Library", desc: "One of the oldest libraries in Asia containing rare manuscripts.", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500" },
    { name: "Sangeetha Mahal", desc: "Famous acoustic marvel hall inside the royal palace.", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500" },
    { name: "Punnainallur Mariamman Temple", desc: "Revered historic shrine dedicated to Goddess Mariamman.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" }
  ],
  "Kodaikanal": [
    { name: "Kodaikanal Lake", desc: "Star-shaped man-made lake with boating facilities.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500" },
    { name: "Coaker's Walk", desc: "Paved pedestrian path offering panoramic valley views.", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500" },
    { name: "Pillar Rocks", desc: "Three giant rock pillars standing 122 meters high.", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500" },
    { name: "Pine Forest", desc: "Dense pine tree forest ideal for walks.", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500" },
    { name: "Bryant Park", desc: "Botanical garden featuring colorful flora.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" }
  ],
  "Ooty": [
    { name: "Ooty Botanical Garden", desc: "Sprawling garden with exotic plants and flowers.", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500" },
    { name: "Ooty Lake", desc: "Scenic lake offering boating and pony rides.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" },
    { name: "Nilgiri Mountain Railway", desc: "UNESCO heritage toy train winding through hills.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" },
    { name: "Doddabetta Peak", desc: "Highest mountain peak in the Nilgiri mountains.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500" },
    { name: "Rose Garden", desc: "Enchanting garden featuring thousands of rose varieties.", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500" }
  ],
  "Chennai": [
    { name: "Marina Beach", desc: "World's second longest natural urban beach.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" },
    { name: "Kapaleeshwarar Temple", desc: "Ancient Dravidian style Shiva temple in Mylapore.", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500" },
    { name: "Santhome Cathedral", desc: "Historical Neo-Gothic style Catholic basilica.", img: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=500" },
    { name: "Fort St. George", desc: "First English fortress in India built in 1644.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" },
    { name: "Elliot's Beach", desc: "Calm and peaceful beach ideal for evening walks.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500" }
  ],
  "Trichy": [
    { name: "Rock Fort Temple", desc: "Ancient temple perched on a massive 83-meter high rock.", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500" },
    { name: "Sri Ranganathaswamy Temple", desc: "Massive temple complex dedicated to Lord Vishnu in Srirangam.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500" },
    { name: "Kallanai Dam", desc: "Ancient dam built across the Kaveri river by Chola king Karikalan.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" },
    { name: "Jambukeswarar Temple", desc: "Famous Shiva temple representing the element of water.", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500" },
    { name: "St. John's Church", desc: "Historic 19th-century church located near the cantonment.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" }
  ],
  "Goa": [
    { name: "Baga Beach", desc: "Famous lively beach known for nightlife and water sports.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" },
    { name: "Basilica of Bom Jesus", desc: "UNESCO world heritage site holding St. Francis Xavier's tomb.", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500" },
    { name: "Fort Aguada", desc: "17th-century Portuguese fort overlooking the ocean.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" },
    { name: "Dudhsagar Falls", desc: "Majestic four-tiered waterfall on the Mandovi river.", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500" },
    { name: "Palolem Beach", desc: "Scenic crescent-shaped peaceful beach in South Goa.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500" }
  ],
  "Delhi": [
    { name: "Red Fort", desc: "Historic Mughal fortress built of red sandstone.", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500" },
    { name: "Qutub Minar", desc: "World's tallest brick minaret built in the 12th century.", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500" },
    { name: "India Gate", desc: "War memorial dedicated to Indian army soldiers.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" },
    { name: "Lotus Temple", desc: "Bahai House of Worship notable for its flower-like shape.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500" },
    { name: "Humayun's Tomb", desc: "Stunning garden tomb of Mughal Emperor Humayun.", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500" }
  ],
  "Mumbai": [
    { name: "Gateway of India", desc: "Iconic 20th-century waterfront arch monument.", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500" },
    { name: "Marine Drive", desc: "3.6 km long picturesque boulevard along the coast.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" },
    { name: "Elephanta Caves", desc: "UNESCO World Heritage rock-cut cave temples on an island.", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500" },
    { name: "Chhatrapati Shivaji Terminus", desc: "Historic Victorian Gothic railway station.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" },
    { name: "Juhu Beach", desc: "Popular beach famous for local street food.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500" }
  ]
};

// Generate 5 dynamic AI-visual spots for remaining cities automatically
cities50.forEach((city) => {
  if (!cityPlacesDatabase[city]) {
    cityPlacesDatabase[city] = [
      { name: `${city} Iconic Viewpoint`, desc: `Stunning panoramic scenic viewpoint in ${city}.`, img: `https://picsum.photos/seed/${city}spot1/500/300` },
      { name: `${city} Heritage Monument`, desc: `Historic cultural landmark and architecture of ${city}.`, img: `https://picsum.photos/seed/${city}spot2/500/300` },
      { name: `${city} Botanical Gardens`, desc: `Lush green relaxing nature and flower park in ${city}.`, img: `https://picsum.photos/seed/${city}spot3/500/300` },
      { name: `${city} Traditional Bazaar`, desc: `Famous shopping street and local food market.`, img: `https://picsum.photos/seed/${city}spot4/500/300` },
      { name: `${city} Waterfall & Springs`, desc: `Refreshing natural water attraction near ${city}.`, img: `https://picsum.photos/seed/${city}spot5/500/300` }
    ];
  }
});

// ==========================================
// // ==========================================
// ==========================================
// 4. POPULATE & DYNAMIC UI LOADERS
// ==========================================
function populateAllDropdowns() {
  const optionsHtml = cities50.map(c => `<option value="${c}">${c}</option>`).join('');

  const placeSel = document.getElementById('placeCity');
  if (placeSel) { placeSel.innerHTML = optionsHtml; updatePlaces(); }

  const hotelSel = document.getElementById('hotelCity');
  if (hotelSel) { hotelSel.innerHTML = optionsHtml; updateHotelDetails(); }

  const srcSel = document.getElementById('srcCity');
  if (srcSel) srcSel.innerHTML = optionsHtml;

  const destSel = document.getElementById('destCity');
  if (destSel) destSel.innerHTML = optionsHtml;

  document.querySelectorAll('.city-select').forEach(sel => {
    sel.innerHTML = optionsHtml;
  });
}

// FAMOUS PLACES LOADER WITH AI REALISTIC FALLBACKS
function updatePlaces() {
  const sel = document.getElementById('placeCity');
  const grid = document.getElementById('placesGrid');
  if (!sel || !grid) return;

  const city = sel.value || "Madurai";
  const spots = cityPlacesDatabase[city] || cityPlacesDatabase["Madurai"];

  grid.innerHTML = spots.map((p, index) => `
    <div class="dash-card card" style="padding: 0; overflow: hidden; text-align: left; background: #ffffff;">
      <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 160px; object-fit: cover; margin-bottom: 0;" onerror="this.src='https://picsum.photos/seed/${city}ai${index}/500/300'">
      <div style="padding: 1rem;">
        <span class="badge" style="background:#e0f2fe; color:#0369a1;">Spot #${index + 1}</span>
        <h4 style="color: var(--primary); margin: 0.3rem 0; font-size: 1.05rem;">${p.name}</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.8rem; line-height: 1.4;">${p.desc}</p>
        <button class="btn" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; width: 100%;" onclick="alert('Selected Spot: ${p.name}')">Select Spot ✓</button>
      </div>
    </div>
  `).join('');
}

// HOTEL LOADER
function updateHotelDetails() {
  const sel = document.getElementById('hotelCity');
  if (!sel) return;
  const city = sel.value || "Madurai";
  const h = cityDatabase[city] || cityDatabase["Madurai"];

  if (document.getElementById('hotelName')) document.getElementById('hotelName').innerText = h.hotelName;
  if (document.getElementById('hotelLocation')) document.getElementById('hotelLocation').innerText = `📍 Location: ${h.location}`;
  if (document.getElementById('hotelDesc')) document.getElementById('hotelDesc').innerText = h.desc;
  if (document.getElementById('hotelPhone')) document.getElementById('hotelPhone').innerText = `📞 Phone: ${h.phone}`;
  if (document.getElementById('hotelSingle')) document.getElementById('hotelSingle').innerText = h.single;
  if (document.getElementById('hotelDouble')) document.getElementById('hotelDouble').innerText = h.double;
  
  const imgEl = document.getElementById('hotelImg');
  if (imgEl) {
    imgEl.src = h.hotelImg;
    imgEl.onerror = function() { this.src = `https://picsum.photos/seed/hotel${city}/600/400`; };
  }
}

// TRIP & WEATHER
async function calculateTrip() {
  const tripType = document.getElementById('tripType') ? document.getElementById('tripType').value : 'Solo Trip';
  const src = document.getElementById('srcCity') ? document.getElementById('srcCity').value : 'Madurai';
  const dest = document.getElementById('destCity') ? document.getElementById('destCity').value : 'Kodaikanal';
  const startDate = document.getElementById('startDate') ? document.getElementById('startDate').value : '';
  const endDate = document.getElementById('endDate') ? document.getElementById('endDate').value : '';

  if (!startDate) { alert('Please select a Start Date for your trip!'); return; }

  const data = cityDatabase[dest] || cityDatabase["Madurai"];
  
  if (document.getElementById('routeText')) {
    document.getElementById('routeText').innerHTML = `📍 <b>Trip Type:</b> ${tripType}<br>📍 <b>Route:</b> ${src} → ${dest} (${data.dist} km)<br>📅 <b>Travel Period:</b> ${startDate} to ${endDate || 'N/A'}`;
  }
  if (document.getElementById('fareBus')) document.getElementById('fareBus').innerText = `₹${data.bus}`;
  if (document.getElementById('fareTrain')) document.getElementById('fareTrain').innerText = `₹${data.train}`;
  if (document.getElementById('fareFlight')) document.getElementById('fareFlight').innerText = `₹${data.flight}`;
  if (document.getElementById('tripResultBox')) document.getElementById('tripResultBox').classList.remove('hidden');

  const weatherBox = document.getElementById('weatherResult');
  if (weatherBox) {
    weatherBox.innerHTML = `⏳ Fetching 10-day live weather forecast for <b>${dest}</b> starting from <b>${startDate}</b>...`;
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lon}&start_date=${startDate}&end_date=${addDays(startDate, 9)}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
      if (!res.ok) throw new Error("API Error");
      const json = await res.json();

      let html = `<strong>🌤️ 10-Day Weather Forecast for ${dest} (Starting ${startDate}):</strong><div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); margin-top:0.8rem;">`;
      if (json.daily && json.daily.time) {
        for (let i = 0; i < json.daily.time.length; i++) {
          html += `<div class="card" style="padding:0.5rem; background:#ffffff; text-align:center;">
            <small style="color:var(--primary); font-weight:bold;">${json.daily.time[i]}</small>
            <div style="font-size:0.85rem; margin-top:0.2rem;">Max: <b>${json.daily.temperature_2m_max[i]}°C</b></div>
            <div style="font-size:0.8rem; color:#64748b;">Min: ${json.daily.temperature_2m_min[i]}°C</div>
          </div>`;
        }
      }
      html += `</div>`;
      weatherBox.innerHTML = html;
    } catch (e) {
      let html = `<strong>🌤️ Weather Forecast for ${dest} (From ${startDate}):</strong><div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); margin-top:0.8rem;">`;
      for (let i = 0; i < 10; i++) {
        html += `<div class="card" style="padding:0.5rem; background:#ffffff; text-align:center;">
          <small style="color:var(--primary); font-weight:bold;">${addDays(startDate, i)}</small>
          <div style="font-size:0.85rem; margin-top:0.2rem;">Max: <b>${28 + (i % 3)}°C</b></div>
          <div style="font-size:0.8rem; color:#64748b;">Min: ${20 + (i % 2)}°C</div>
        </div>`;
      }
      html += `</div>`;
      weatherBox.innerHTML = html;
    }
  }
}

function addDays(dateStr, days) {
  const result = new Date(dateStr);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
}

// MODAL UTILITY
function showModal(title, msg, redirectUrl) {
  const modalTitle = document.getElementById('modalTitle');
  const modalMsg = document.getElementById('modalMsg');
  const popupModal = document.getElementById('popupModal');

  if (modalTitle) modalTitle.innerText = title;
  if (modalMsg) modalMsg.innerText = msg;
  if (popupModal) popupModal.classList.remove('hidden');
  window.targetUrl = redirectUrl;
}

function closeModal() {
  const popupModal = document.getElementById('popupModal');
  if (popupModal) popupModal.classList.add('hidden');
  if (window.targetUrl) window.location.href = window.targetUrl;
}

function handleLogin() {
  const u = document.getElementById('loginUser').value;
  if (!u) { alert('Please enter username'); return; }
  showModal("Success!", "Login Successfully 🎉", "index.html");
}

function bookHotelOnline() {
  const sel = document.getElementById('hotelCity');
  if (!sel) return;
  const city = sel.value;
  const h = cityDatabase[city];
  const room = document.getElementById('roomType') ? document.getElementById('roomType').value : 'Single Bedroom';
  const checkIn = document.getElementById('checkInDate') ? document.getElementById('checkInDate').value : '';
  const checkOut = document.getElementById('checkOutDate') ? document.getElementById('checkOutDate').value : '';

  if (!checkIn || !checkOut) { alert('Please select Check-in and Check-out dates!'); return; }
  showModal("Your Hotel Booking Successful! 🎉", `Hotel: ${h.hotelName}\nCity: ${city}\nRoom Type: ${room}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nStatus: Confirmed & Booked Online!`);
}

function completeBooking() {
  const name = document.getElementById('bookName') ? document.getElementById('bookName').value : '';
  const phone = document.getElementById('bookPhone') ? document.getElementById('bookPhone').value : '';
  const email = document.getElementById('bookEmail') ? document.getElementById('bookEmail').value : '';

  if (!name || !phone || !email) {
    alert('Please fill all required details!');
    return;
  }

  showModal(
    "Booking Confirmation Successful! 🎉", 
    `Passenger Name: ${name}\nID Number: [Verified]\nPhone: ${phone}\nEmail: ${email}\n\nTrip & Hotel Reservation Order Receipt Generated!\nReceipt Order ID: #TRP${Math.floor(Math.random()*899999 + 100000)}`, 
    "login.html"
  );
}

// ==========================================
// 5. WINDOW INITIALIZATION
// ==========================================
window.onload = function() {
  populateAllDropdowns();

  const placeSelect = document.getElementById('placeCity');
  if (placeSelect) {
    placeSelect.addEventListener('change', updatePlaces);
  }

  const hotelSelect = document.getElementById('hotelCity');
  if (hotelSelect) {
    hotelSelect.addEventListener('change', updateHotelDetails);
  }

  if (document.getElementById('styleGrid')) {
    renderStyle('women', 'Traditional');
  }
};