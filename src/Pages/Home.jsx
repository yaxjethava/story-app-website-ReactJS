import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';

const defaultStories = [
  // Adventure
  {
    id: 1,
    title: "The Last Train to Tomorrow",
    excerpt: "As the city slept, Arjun boarded the last train that would ever leave his hometown...",
    image: "https://m.media-amazon.com/images/I/71CT62lOR-L._UF894,1000_QL80_.jpg",
    category: "Adventure"
  },
  {
    id: 2,
    title: "Into the Wild Storm",
    excerpt: "When Meera got stranded in the Himalayas, she discovered more than just a way back...",
    image: "https://i.ytimg.com/vi/u7XnlYPGzEI/hqdefault.jpg",
    category: "Adventure"
  },

  // Mystery
  {
    id: 3,
    title: "Whispers in the Library",
    excerpt: "Every night at 12:03 AM, Aanya heard whispers behind the ancient bookshelf in the campus library...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdacOLOUyIAZcV58BphG5qKEvL6S-nZ0DnQ&s",
    category: "Mystery"
  },
  {
    id: 4,
    title: "The Locked Room",
    excerpt: "The police said it was suicide. But the door was locked from the inside, and Riya had no key...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYQ73n9J7T0RvGdns8Mnj2rBd9e4pZGQY1g&s",
    category: "Mystery"
  },

  // Life Lessons
  {
    id: 5,
    title: "The Boy Who Painted Rainbows",
    excerpt: "In a grey, war-torn village, a young boy named Kabir used wildflowers to create colors where none existed...",
    image: "https://t3.ftcdn.net/jpg/05/08/03/98/360_F_508039895_8u4VXZZxiBH9aDtzEiyC4Kw8NzRLAnDO.jpg",
    category: "Life Lessons"
  },
  {
    id: 6,
    title: "Grandma’s Last Letter",
    excerpt: "Before passing away, Grandma left a letter that changed everyone's view of life and love...",
    image: "https://m.media-amazon.com/images/I/61To87oHEGL._AC_UF350,350_QL50_.jpg",
    category: "Life Lessons"
  }
];

const Home = () => {
  const [stories, setStories] = useState(defaultStories);

  useEffect(() => {
    const storedStories = localStorage.getItem('stories');
    if (storedStories) {
      const parsedStories = JSON.parse(storedStories);
      setStories(prevStories => [...prevStories, ...parsedStories]); // Combine default stories with localStorage stories
    }
  }, []);

  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to StoryVerse</h1>
          <p className="lead">Discover, Read & Share Inspiring Stories & Blogs</p>
          <Link to="/stories" className="btn btn-warning btn-lg mt-3">Explore Stories</Link>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">🌟 Featured Stories</h2>
          <div className="row">

            {/* Story Card Example */}
            {stories.map((val) => {
              return (
                <div className="col-md-3 mb-4" key={val.id}>
                  <div className="card shadow-sm">
                    <img src={val.image} className="card-img-top" alt="story" />
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.excerpt}</p>
                      <Link to="/stories" className="btn btn-outline-primary btn-sm">Read More</Link>
                    </div>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">📚 Browse by Category</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">

            {["Adventure", "Romance", "Technology", "Mystery", "Life Lessons", "Fantasy"].map((cat, index) => (
              <Link to={`/category/${cat.toLowerCase()}`} key={index} className="btn btn-outline-dark px-4 py-2 rounded-pill">
                {cat}
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">🚀 How It Works</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <h4>1. Read</h4>
              <p>Explore thousands of stories across categories by amazing authors.</p>
            </div>
            <div className="col-md-4">
              <h4>2. Write</h4>
              <p>Write and publish your own stories using our powerful editor.</p>
            </div>
            <div className="col-md-4">
              <h4>3. Connect</h4>
              <p>Engage with readers and authors through comments and profiles.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
