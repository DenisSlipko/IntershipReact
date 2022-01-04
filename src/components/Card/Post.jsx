import { React } from 'react';
import image from '../../images/image-earth.jpeg';

const Post = ({ title, text }) => (
  <div className="card-container">
    <img className="earth-img" src={image} alt="img" />
    <div className="card-title">{title}</div>
    <div className="card-text">{text}</div>
  </div>
  );
;

export default Post;
