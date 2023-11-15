import { useEffect, useState } from "react";

/** Vendors */
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

/**  Custom Components */
import Gallery from "@/components/gallery/views/List";
import Header from "@/components/shared/header/Header";
import Layout from "@/components/shared/layout/Layout";
import Selection from "@/components/selection/views/List";

/** Custom Hooks */
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  // Capture the window size for mainly adjusting the drag and drop backend
  const { width } = useWindowSize();
  const isMobile = width <= 600;

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/photos?limit=100",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPhotos(data.photos);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  //These are drag and drop actions that used throughout the application
  const actions = {
    onDrop: (photo) =>
      setSelectedPhotos((prevPhotos) => {
        // Remove the photo if found in the selected photo array
        if (!prevPhotos.find((p) => p.id === photo.id)) {
          return [...prevPhotos, photo];
        }
        return prevPhotos;
      }),
    onDragStart: (photo) => {
      setSelectedPhotos((prevPhotos) => {
        // Add the photo to selectedPhotos if not already present
        if (!prevPhotos.find((p) => p.id === photo.id)) {
          return [...prevPhotos, photo];
        }
        return prevPhotos;
      });
    },
    onDragEnd: (photo, didDrop) => {
      if (!didDrop) {
        // Remove the photo from selectedPhotos if drop was not successful
        setSelectedPhotos((prevPhotos) =>
          prevPhotos.filter((p) => p.id !== photo.id),
        );
      }
    },
  };

  // Grab the selected photos in LS
  useEffect(() => {
    const savedPhotos = JSON.parse(
      localStorage.getItem("selectedPhotos") || "[]",
    );
    setSelectedPhotos(savedPhotos);
  }, []);

  // Set the selection list to those photos array that was assigned above
  useEffect(() => {
    localStorage.setItem("selectedPhotos", JSON.stringify(selectedPhotos));
  }, [selectedPhotos]);

  return (
    <main>
      <div className="app">
        <Header />
        <Layout>
          <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <Gallery
              actions={actions}
              loading={loading}
              photos={photos}
              setSelectedPhotos={setSelectedPhotos}
            />
            <Selection
              onDrop={actions.onDrop}
              selectedPhotos={selectedPhotos}
              setSelectedPhotos={setSelectedPhotos}
            />
          </DndProvider>
        </Layout>
      </div>
    </main>
  );
}
