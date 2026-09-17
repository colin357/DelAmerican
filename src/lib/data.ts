const CDN = "https://cdn.prod.website-files.com";
const A = `${CDN}/5ed1239c09e265303b78e324`;
const B = `${CDN}/5ed1239c30d923075017f8ef`;

export const site = {
  name: "Del American",
  fullName: "Del American Real Estate Group",
  tagline: "Discover Exceptional Living",
  logo: "/logo.svg",
  address: ["1101 Schultz Ave", "Winter Park FL, 32789", "USA"],
  email: "info@delamerican.com",
  phone: "407.921.0100",
  phoneIntl: "+1 (407) 921-0100",
  phoneHref: "tel:+14079210100",
  officeAddress: "5211 Peachtree Blvd, Atlanta, Georgia 30341",
  directionsUrl:
    "https://www.google.com/maps/place/5211+Peachtree+Blvd,+Chamblee,+GA+30341/@33.8907752,-84.3112731,17z",
  instagram: "https://www.instagram.com/delamerican/",
};

export const nav = [
  { label: "Company", href: "/our-company" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Development", href: "/services#development" },
      { label: "Construction", href: "/services#construction" },
      { label: "Management", href: "/services#management" },
      { label: "Consulting", href: "/services#consulting" },
    ],
  },
  { label: "Relationships", href: "/relationships" },
  { label: "Press", href: "/press" },
  { label: "Contact Us", href: "/contact-us" },
];

export type Category = "Apartments" | "Condominiums" | "Land & Single Family";
export const categories: Category[] = ["Apartments", "Condominiums", "Land & Single Family"];

export interface Project {
  slug: string;
  name: string;
  location: string;
  date: string;
  release: string;
  categories: Category[];
  cover: string;
  gallery: string[];
  facts: { label: string; value: string }[];
  description?: string;
}

export const projects: Project[] = [
  {
    slug: "sls-atlanta",
    name: "S L X Atlanta",
    location: "Atlanta, Georgia",
    date: "March 15, 2020",
    release: "March 2020",
    categories: ["Apartments"],
    cover: `${A}/5f7b6df34d7c3414bd9daa1c_SLX_Exteriors_Twilights_214CORRECTEDweb.jpg`,
    gallery: [
      `${A}/6049ad8ca99dc2600034c9cc_SLX_Exteriors_Twilights_236%20v1WEB.jpg`,
      `${A}/6049adb7a01db5093d575c00_SLX_Interiors_016WEB.jpg`,
      `${A}/6049ae409c0a2765b582f38a_05_SLX-Atlanta_407-Kitchen-Living.jpg`,
    ],
    facts: [
      { label: "Leasing & Marketing", value: "Del American" },
      { label: "Property Management", value: "Alliance Residential" },
      { label: "Started", value: "2018" },
      { label: "Completed", value: "2020" },
    ],
  },
  {
    slug: "vegas888",
    name: "Vegas 888",
    location: "Las Vegas, Nevada",
    date: "February 12, 2020",
    release: "February 2020",
    categories: ["Condominiums"],
    cover: `${A}/5ed5600e29d1e88636cfb93f_vegas%20888%20entry1200.jpg`,
    gallery: [
      `${A}/5ed55fd33cf77c3d2385eed0_vegas%20888%20entry.jpg`,
      `${A}/5ed560932b0a2a135bdb32d4_888.png`,
      `${A}/5ed560a47d7cfc6b3ef1cfba_cross-section-fo-interiors.jpg`,
      `${A}/5ed560b8d8ff0922df5af188_outside-view-with-overhang-pool.jpg`,
      `${A}/5ed560c77fb119e0d6283060_pool.jpg`,
      `${A}/5ed560d890bab570c49f280f_upper-pool-area.jpg`,
      `${A}/5ed560ef2b0a2ac487db3625_sitting-at-pool.jpg`,
    ],
    facts: [{ label: "Sales & Marketing", value: "Del American" }],
  },
  {
    slug: "pure-living",
    name: "Pure Living Heathrow",
    location: "Heathrow, Florida",
    date: "October 19, 2010",
    release: "October 2010",
    categories: ["Apartments"],
    cover: `${A}/5ed5548629d1e84483cf6f04_Pool1200.jpg`,
    gallery: [
      `${A}/5ed5543d2b0a2aaae3dae68c_Pool.jpg`,
      `${A}/5ed55a1f88d63376e9f25c8a_Gate.jpg`,
      `${A}/5ed55a4078b236276b941ab9_PL218-livingroom02.jpg`,
      `${A}/5ed55a667fb1191ffe280afe_Inside%20orange.jpg`,
    ],
    facts: [
      { label: "Units", value: "252" },
      { label: "Leasing & Marketing", value: "Del American" },
      { label: "Contractor", value: "ARC / Del American" },
      { label: "Property Management", value: "Cambridge" },
      { label: "Construction Lender", value: "Regions Bank / National City Bank" },
      { label: "Total Investment", value: "$50,000,000" },
      { label: "Investor", value: "Lincoln Financial" },
      { label: "Started", value: "2008" },
      { label: "Completed", value: "2010" },
    ],
    description:
      "Pure Living Heathrow is located off AAA Blvd at 740 Savory Place in Heathrow, Florida. Del American developed the property using credit enhanced conventional financing via a Standby-by Pre-Sale. The property was built as 2 and 3 story garden style breeze way buildings features 2 Story direct entry Villas. The modern architectural styling is a fusion of 80’s Miami and New Age Tokyo. The cutting edge Pure Living product features 12 floor plans, 1 to 4 bedrooms, ranging from 675 sf to 2350 sf, and averaging at 1220 sf. The amenities included a 10000 sf multi-level and visually striking club house, executive and fitness centers, infinity edge champagne pools with resort style cabanas, 24/7 Guarded Entry, grilling pavilion, The HOT SPOT, CLUB PURE, a dog park, European style kitchens featuring top-of-the line finishes, sand volley ball, 9-10’ ceilings, Tokyo doors, sundecks and in building and detached garages.",
  },
  {
    slug: "grand-bellagio",
    name: "Grand Bellagio",
    location: "Clearwater, Florida",
    date: "January 24, 2002",
    release: "January 2002",
    categories: ["Land & Single Family", "Condominiums"],
    cover: `${A}/5ed56675e5322a74f465684f_LgArial6001200.jpg`,
    gallery: [
      `${A}/5ed5667f7d7cfc2d5cf202f4_LgArial600.jpg`,
      `${A}/5ed566fb59cf59667009f566_arialPool2.jpg`,
      `${A}/5ed5670e1993bdfc5e4c4b5d_SceneBell.jpg`,
    ],
    facts: [
      { label: "Units", value: "311" },
      { label: "Leasing & Marketing", value: "Del American" },
      { label: "Contractor", value: "Camden" },
      { label: "Property Management", value: "Del American" },
      { label: "Construction Lender", value: "Regions Bank" },
      { label: "Total Investment", value: "$42,000,000" },
      { label: "Investor", value: "ING Clarion" },
      { label: "Started", value: "2001" },
      { label: "Completed", value: "2002" },
    ],
    description:
      "The Grand Bellagio at Baywatch is located off US Hwy 60 at 2701 Via Cipriani in Clearwater, Florida, located directly on Old Tampa Bay. Del American developed the property using conventional financing. The community was awarded \"The Best Garden Apartment Community Finalist by NAHB in 2003\". The property was built in 3 story garden style breeze way buildings with an Italian architectural style and features 10 floor plans, 1 to 3 bedrooms, ranging from 1020sf to 2235 sf, averaging at 1450 sf. Amenities included an 8500 sf exceptional club house, fitness center, luxury pool with cabanas, 24/7 Guarded Entry, 1.5 mile boardwalk, 54 boat slips, tennis court, sand volley ball as well as in building and detached garages.",
  },
];

export const homeImages = {
  hero: `${B}/6049a5b92d48a6c46659fafd_SLX_Exteriors_316WEB.jpg`,
  about: `${B}/5ed1ef7def82ae19727a367e_ChrisAvatar.jpg`,
  apartments: `${B}/6049942669f88310bc025ef9_Pool1200.jpg`,
  condos: `${B}/60499400bb1d54aeda93419b_outside-view-with-overhang-pool.jpg`,
  singleFamily: `${B}/604994385a2ed9647940c40a_101405420_10158454780183189_3587321036837748736_o.jpg`,
  kitchen: `${B}/6049949415e7fe39ec62804a_12_SLX-Atlanta_408-Kitchen.jpg`,
  vegas888: `${B}/604993fec7ca195102212902_888.png`,
  contact: `${B}/6049a5bf69f88380be02a464_SLX_Interiors_016WEB.jpg`,
  companyGate: `${B}/604994297110641f00da9c79_Gate%202.png`,
};

export const services = [
  {
    id: "development",
    title: "Development",
    summary:
      "Del American is a Best-In-Class, National Award Winning, Residential Development Company specializing in creating the Ultimate Residential Lifestyle™",
    image: `${B}/604a7c412b484d93b082e1a7_DevelopmentServices.jpg`,
    paragraphs: [
      "With the ultimate goal of creating exceptional value for residents, partners and investors, Del American provides superior results through prime site selection within high job growth sub markets, innovative modern and traditional designs, exceptional interior finishes, exclusive property services, and specialized marketing techniques.",
      "Del American considers itself a 'Boutique' Residential Multi Family Developer. Our executive team keenly focuses on dramatic design details, elegant quality finishes, unique luxury services and superior marketing presentations.",
      "Del American's development teams always include award winning Designers, experienced Contractors and Professional Property Management firms for all developments to insure timely performance, quality results and competitive budgets.",
    ],
  },
  {
    id: "construction",
    title: "Construction",
    summary:
      "Del American has been the general contractor and constructed over 4200 multifamily and single family residences as for its own account as well as for its clients.",
    image: `${B}/604a7cd31a52d910541a86ef_ConstructionServices.jpg`,
    paragraphs: [
      "Del American has been the general contractor and constructed over 4200 multifamily and single family residences as for its own account as well as for its clients. During eleven of its Joint Venture development projects, which required localized 3rd party general contractors, Del American provided Construction Management Services. After Hurricane Andrew hit Miami, Del American affiliates provided construction services on a high rise condominium building, a garden apartment community and over 200 SFD Homes.",
      "Del America's Most Recent Project: Pure Living Heathrow.",
    ],
  },
  {
    id: "management",
    title: "Management",
    summary:
      "Elegance and Class are key attributes of Del American's communities. We train and empower our leasing professionals to make customer satisfaction based decisions.",
    image: `${B}/604a7c5a2f9a4ca6ebb8fec6_ManagementServices.jpg`,
    sections: [
      {
        heading: "VIP Services",
        body: "Our objective is to engage future residents with exceptional professional marketing presentations. Each qualified prospect receives VIP treatment. We train and empower our leasing professionals to make customer satisfaction based decisions. Services Include: 24/7 Guard Service | Valet Parking | Concierge Services | Pool Hostesses | Spa Services | Fitness Training",
      },
      {
        heading: "Two Distinct Brands",
        body: "Del American contracts the best 3rd party property management teams for its developments while maintaining control over the marketing, leasing and concierge services. Del American's apartment communities operate under 2 distinct brands: a modern South Beach inspired Brand and \"S L X Grand\", an Iconic Mediterranean inspired Brand.",
      },
      {
        heading: "Elegance and Class",
        body: "Elegance and Class are key attributes of Del American's communities. Property web sites, marketing materials, furnishings, leasing staff and services are all held to high standards with the unique Del American touch.",
      },
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    summary:
      "Del American advises and consults in many facets of the multifamily industry. Its clients include National Developers and Institutional Investment Firms.",
    image: `${A}/604a79739e872f9a2f37ff31_Consulting-Vegas888.jpg`,
    paragraphs: [
      "Del American advises and consults in many facets of the multifamily industry. Its clients include National Developers and Institutional Investment Firms. Services provided for Multifamily For Sale and For Rent market rate, affordable and student housing include:",
      "Acquisition and Investment Analysis | Market Research | Project Underwriting | Architectural, Interior, Amenity Design Consulting | Leasing, Sales and Marketing Plans | Rent Positioning Studies | Development Budget Reviews | Strategic Planning | Condo Conversion Marketability and Feasibility Studies | Major Capital Placements.",
    ],
  },
];

export const consultingProjects = [
  { location: "Austin, Texas", name: "Stonehaven", detail: "280 Apartments", image: `${A}/604a79da48afffb01863d07e_Consulting-Stonehaven.jpg` },
  { location: "Woodbury, Minnesota", name: "Uptown at Citywalk", detail: "490 Apartments and Retail", image: `${A}/604a79ba1a52d9338b1a7496_Consulting-Uptown.jpg` },
  { location: "Orlando, Florida", name: "GrandVille on Avalon Park", detail: "487 Apartments", image: `${A}/604a79989900c92e4083a9ed_Consulting-Grandville.jpg` },
  { location: "Las Vegas, Nevada", name: "Vegas 888 Del American", detail: "545 Condominiums", image: `${A}/604a79739e872f9a2f37ff31_Consulting-Vegas888.jpg` },
];

export const partners = [
  ["UC Funds", "604a8132faeedaf00038b6ba_UC-Funds.png"],
  ["SunAmerica", "604a81455fccce47679c93d2_SunAmerica.jpg"],
  ["Amstar Group", "604a81552845f130cdf57aeb_Amstar-Group.jpg"],
  ["ING", "604a8164faeeda0a7838b775_ING.jpg"],
  ["BankAtlantic", "604a816e70746d8a9b1f22a5_BankAtlantic.jpg"],
  ["Intercontinental", "604a81835fccce78cc9c9596_Intercontinental.jpg"],
  ["FHFA", "604a8193c4bfb07dba80ae70_FHFA.png"],
  ["Dai-Ichi", "604a81a9a4adc54566579228_Dai-Ichi.jpg"],
  ["US Bank", "604a81be8c1c3b781c5c87d4_us-bank.jpg"],
  ["Bank of America", "604a81ce8177b5e55678c0c3_Bank-of-America.jpg"],
  ["Regions", "604a81e1643087c654af27aa_Regions.jpg"],
  ["Lincoln Financial Group", "604a81f0f84b16195e47bb63_Lincoln-Financial-Group.jpg"],
  ["AIG", "604a81fc0c841d59a0e74e61_AIG.png"],
  ["BankBoston", "604a8208643087088eaf2935_BankBoston.jpg"],
  ["LeCesse", "604a8215fa27c41005c4dc51_LeCesse.png"],
  ["Real Estate Capital Partners", "604a823b312529bafd115f74_RealEstateCapitalPartners.jpg"],
  ["Alliance", "604a824bfa27c43ba8c4dda0_Alliance.jpg"],
  ["Cambridge", "604a825fc4bfb0594780b39c_Cambridge.jpg"],
  ["Colliers", "604a826f312529bb62116309_Colliers.jpg"],
  ["CBRE", "604a827d7ef4f37ee83a5cd5_CBRE.jpg"],
  ["HFF", "604a829cc4bfb0739080b5e9_HFF.jpg"],
  ["Lubert-Adler", "604a82b825fb0fa9404d95d4_Lubert-Adler.png"],
].map(([name, file]) => ({ name, image: `${A}/${file}` }));

export const team = [
  { name: "Anthony DelGuidice", role: "President & Managing Director", image: `${A}/5ed1e99e646819409910eedf_Anthony2.jpg` },
  { name: "Fazira DelGuidice", role: "Chief Design Officer", image: `${A}/67cda46bb17e495ca47ba9d4_Screenshot%202025-03-09%20at%202.23.31%E2%80%AFpm.png` },
  // Drop the headshot at public/team/matt-edwards.jpg; the card shows initials until it exists.
  { name: "Matt Edwards", role: "Development Consultant", image: "/team/matt-edwards.jpg" },
];

export type PressCategory = "Awards" | "Market Data" | "New Developments";
export interface Post {
  slug: string;
  title: string;
  date?: string;
  category?: PressCategory;
  image?: string;
  video?: string;
  body: string[];
  tags?: string[];
}

const tags = "#DelAmerican #DiscoverExceptionalLiving #realestate #realestatedeveloper #luxurylifestyles".split(" ");

export const posts: Post[] = [
  {
    slug: "del-american-real-estate-group",
    title: "Del American Real Estate Group",
    date: "Mar 20, 2020",
    category: "Market Data",
    image: `${A}/603d908ce5f1a741764395d3_DA%20Logo.png`,
    video: "https://www.youtube.com/embed/K4G-sqTo_GY",
    body: ["Discover Exceptional Living with Del American Real Estate Group."],
  },
  {
    slug: "excel-awards",
    title: "Excel Awards",
    date: "Feb 25, 2020",
    category: "Awards",
    body: [
      "Best Interior Merchandising of Models - The Grand Reserve at Windsor Parke",
      "Best Rental Community - Models and Common Areas - The Grand Reserve at Windsor Parke",
    ],
  },
  {
    slug: "17905308914363314",
    title: "Beautiful vision and design for Vegas 888",
    image: `${A}/61c2adc2daa8e4bc664bc9e6_269744978_910187953199728_9080130655458307866_n.jpeg`,
    body: [
      "Beautiful vision and design for Vegas 888. Let Del American design an incredible work of art for your next community.",
      "Call (407) 921-0100 or visit our website www.delamerican.com for more information.",
    ],
    tags,
  },
  {
    slug: "17945424637655929",
    title: "Dip into a heated infinity pool",
    image: `${A}/61c0ade84fdedf2abd86d7ab_269595256_624491915423102_5808580310645697402_n.jpeg`,
    body: [
      "Dip into a heated infinity pool at one of our stunning Del American communities.",
      "Contact (407) 921-0100 or send an email to info@delamerican.com",
    ],
    tags,
  },
  {
    slug: "18158206366175166",
    title: "Del American builds beautiful dreams",
    image: `${A}/61bf552aab823d0f8167c1d5_269601342_3069504643306331_866081144075324005_n.jpeg`,
    body: [
      "Del American builds beautiful dreams and develops stunning communities. Our vision behind the dreams for exceptional communities is where the magic happens.",
      "Call us at (407) 921-0100 or visit our website www.delamerican.com to know more on how to achieve an exceptional living community.",
    ],
    tags,
  },
  {
    slug: "17995458052400010",
    title: "\"Discover Exceptional Living. Experience a Del American Community.\"",
    image: `${A}/61be03a1db59989199eb67c7_269162464_215391307334187_8496363549621114661_n.jpeg`,
    body: [
      "\"Discover Exceptional Living. Experience a Del American Community.\"",
      "Remembering Christopher DelGuidice's vision for exceptional communities - continuing the dream heading into 2022.",
      "Visit www.delamerican.com to start your Del American experience.",
    ],
    tags,
  },
  {
    slug: "18018937951345010",
    title: "Del American's experience and creative team",
    image: `${A}/61bca03865c86dc024dc1319_268071430_1051268372383050_7898076987445577149_n.jpeg`,
    body: [
      "Del American's experience and creative team has allowed it to be versatile and successful in every aspect of the industry.",
      "From development and self-performed construction to equity placement and consulting, Del American has proven itself to be a driving force in the industry as well as an invaluable partner.",
    ],
    tags,
  },
  {
    slug: "17999089963381249",
    title: "Consulting is one of Del American's excellent services",
    image: `${A}/61b3951121a4a477514788e0_265121851_4571094119678889_6632672038935484792_n.jpeg`,
    body: [
      "Consulting is one of Del American's excellent services. The ultimate goal of Del American is to create exceptional value for residents, partners and investors.",
      "Del American provides superior results through prime site selection within high job growth sub markets, innovative modern and traditional designs, exceptional interior finishes, exclusive property services, and specialized marketing techniques.",
      "Visit our website www.delamerican.com or call us at +1 (407) 921-0100 to know more.",
    ],
    tags,
  },
  {
    slug: "17936402566771611",
    title: "Pure Living Heathrow",
    image: `${A}/61b2fa79ed7bde246405626e_265333892_119554563882461_6926734572623303661_n.jpeg`,
    body: [
      "Pure Living Heathrow is a modern architectural style that is a fusion of 80’s Miami and New Age Tokyo. It offers an abundance of health and wellness amenities. The community features an infinity-edge swimming pool, state of the art fitness center and on-site playground. Apartment homes feature kitchen islands, frameless glass showers and oversized closets.",
      "This pet-friendly community is located right off Lake Mary Boulevard providing easy access to Orlando and surrounding areas.",
      "Exceptional design and spa-like amenities await.",
    ],
    tags,
  },
];

export const pressCategories: PressCategory[] = ["Awards", "Market Data", "New Developments"];
