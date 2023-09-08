import Individual from "./Individual";

const width = screen.width;

export default function Cards() {
  return (
    <div className="grid gap-5 lg:col-start-1 lg:col-end-3 lg:grid-cols-4">
      <Individual
        image={
          width < 1024
            ? "mobile/image-deep-earth.jpg"
            : "desktop/image-deep-earth.jpg"
        }
        first="DEEP"
        second="EARTH"
      />
      <Individual
        image={
          width < 1024
            ? "mobile/image-night-arcade.jpg"
            : "desktop/image-night-arcade.jpg"
        }
        first="NIGHT"
        second="ARCADE"
      />
      <Individual
        image={
          width < 1024
            ? "mobile/image-soccer-team.jpg"
            : "desktop/image-soccer-team.jpg"
        }
        first="SOCCER"
        second="TEAM VR"
      />
      <Individual
        image={
          width < 1024 ? "mobile/image-grid.jpg" : "desktop/image-grid.jpg"
        }
        first="THE"
        second="GRID"
      />
      <Individual
        image={
          width < 1024
            ? "mobile/image-from-above.jpg"
            : "desktop/image-from-above.jpg"
        }
        first="FROM UP"
        second="ABOVE VR"
      />
      <Individual
        image={
          width < 1024
            ? "mobile/image-pocket-borealis.jpg"
            : "desktop/image-pocket-borealis.jpg"
        }
        first="POCKET"
        second="BOREALIS"
      />
      <Individual
        image={
          width < 1024
            ? "mobile/image-curiosity.jpg"
            : "desktop/image-curiosity.jpg"
        }
        first="THE"
        second="CURIOSITY"
      />
      <Individual
        image={
          width < 1024
            ? "mobile/image-fisheye.jpg"
            : "desktop/image-fisheye.jpg"
        }
        first="MAKE IT"
        second="FISHEYE"
      />
    </div>
  );
}
