[![Netlify Status](https://api.netlify.com/api/v1/badges/0f2be986-7fff-4c95-8af1-ed5e6ee959cc/deploy-status)](https://app.netlify.com/sites/photo-album-generator/deploys)

## Deployed on Netlify

https://photo-album-generator.netlify.app

## About

A simple and user-friendly tool to create a photo album from Sling Academy Photo Repository

Photo Album Generator made with ☕ & ❤️

### Key Features:

- **Vast Photo Collection**: Accesses the first 100 photos from the [Sling Academy's Free Photo Repository](https://www.slingacademy.com/article/sample-photos-free-fake-rest-api-for-practice/), offering a diverse range of images for your albums.

- **Drag-and-Drop Interface**: Intuitively designed, allowing you to drag photos from the showcase on the right to the teal selection panel on the left.

- **Photo Management**: Easily view, title, and remove photos from your selection. Tailor your album exactly how you like it.

- **Data Persistence**: Utilizes LocalStorage to remember your chosen images, ensuring your album stays intact even when you come back later.

- **Mobile Responsive**: Designed for on-the-go use, ensuring you can create and manage albums from any device, anywhere.

- **Custom Loading Skeleton**: Enhances user experience with a bespoke skeleton loader, ensuring smooth transitions and image loading.

### Mobile Web Version:

- **Long-Press to Move**: On mobile, simply long-press to grab an image, then drag it to your album.

- **Simplified Deletion**: To remove images, tap on the photo in the selection area.

## Component Structure

### Data Fetching and Component Hierarchy

- **Views**: Serve as the primary components for data fetching. Each view is composed of several smaller components.

- **Cards**: These are presentational components within each view. They are designed to display data without handling data fetching themselves.

### Benefits of This Structure

- **Separation of Concerns**: By dividing the data fetching and presentation responsibilities, the codebase becomes more organized and manageable.

- **Readability and Maintenance**: This structured approach makes the code easier to read and maintain, as each component has a clear and distinct role.

## Getting Started

First, run the development server:

```bash
npm  run  dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
