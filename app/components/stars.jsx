import star from '../../assets/star.png';

const ImageRepeater = ({ number }) => {
  const starImage = { star }; // Replace 'star.png' with the path to your image

  const renderImages = () => {
    if (number >= 0 && number <= 5.00) {
      const images = [];
      for (let i = 1; i < number; i++) {
        images.push(
          <img
            key={i}
            src={star}
            alt={`Star ${i + 1}`}
            style={{ width: '50px', height: '50px' }} // Adjust the width and height as needed
          />,
        );
      }
      return images;
    } else {
      return <div>Invalid number. Please choose a number between 1 and 5.</div>;
    }
  };

  return <div>{renderImages()}</div>;
};

export default function Stars({ product }) {
  return (
    <div className="">
      <ImageRepeater number={product.rating} />
    </div>
  );
}
