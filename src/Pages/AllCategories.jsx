import { Link } from 'react-router-dom';
import './AllCategories.css';

const categories = [
  "Adventure",
  "Romance",
  "Mystery",
  "Life Lessons",
  "Technology",
   "Fantasy",
];

const AllCategories = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">📚 Explore Categories</h2>
      <div className="row justify-content-center box-parent">
        {categories.map((cat, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <Link to={`/category/${cat.toLowerCase()}`} className="category-box shadow-sm">
              <div className="p-4 bg-light rounded category-card">
                <h5 className="text-dark">{cat}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
