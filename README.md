# Every Record Store NYC

A static website showcasing and reviewing record stores throughout New York City, with an interactive map-based interface.

## Features

- Interactive map of NYC with record stores marked by colored vinyl icons
- Color-coded rating system (red: bad, black: ok, gold: great, diamond: best in borough)
- Hover over markers to see store information
- Click on markers to see detailed reviews
- Responsive design that works on desktop and mobile
- About page explaining the project

## Technologies Used

- Next.js 14+
- React
- TypeScript
- Tailwind CSS
- Leaflet (for maps)
- React Leaflet

## Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/every-record-store.git
cd every-record-store
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app`: Main application pages
- `/src/components`: Reusable React components
- `/src/data`: Sample record store data
- `/src/styles`: Global styles and Tailwind configuration
- `/src/types`: TypeScript type definitions
- `/public`: Static assets like images

## Customization

To add your own record stores:

1. Update the stores data in `/src/data/stores.ts`
2. Follow the RecordStore interface defined in `/src/types/index.ts`
3. Add store images to `/public/images/`

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by [Everything is Everything NYC](https://everythingiseverything.nyc/)
- Created as a passion project for record collectors and music enthusiasts 