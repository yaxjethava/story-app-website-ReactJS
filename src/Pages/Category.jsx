import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Category.css';

const allStories = [
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
  },

  // Romance
  {
    id: 7,
    title: "A Coffee for Two",
    excerpt: "They met every Thursday at the same café, leaving notes on napkins. Until one day, only a rose remained...",
    image: "https://media.istockphoto.com/id/115594752/photo/grains-and-a-cup-from-coffee-the-top-vie.jpg?s=612x612&w=0&k=20&c=CzhCUM-tP6b3wbB5v05abOk5yDYpNj0JXVDIlsYyOwA=",
    category: "Romance"
  },
  {
    id: 8,
    title: "Letters from Paris",
    excerpt: "Two strangers fall in love across oceans — through handwritten letters sealed with dreams...",
    image: "https://thumbs.dreamstime.com/b/generated-image-378903898.jpg",
    category: "Romance"
  },

  // Technology
  {
    id: 9,
    title: "The Forgotten Algorithm",
    excerpt: "A hacker discovers a lost AI that can predict the future—but only if you ask the right question...",
    image: "https://blogs.egu.eu/geolog/files/2025/05/EGUblog_AI-1-e1746092202822-1400x800.png",
    category: "Technology"
  },
  {
    id: 10,
    title: "Tomorrow's Code",
    excerpt: "She coded an app to talk to her future self—but now the messages were warning her to stop...",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*-4-PZpKjB9KMUgwc.jpg",
    category: "Technology"
  }
];

const Category = () => {
  const { categoryName } = useParams();

  const filteredStories = allStories.filter(
    story => story.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📚 {categoryName} Stories</h2>

      {filteredStories.length === 0 ? (
        <p className="text-center">No stories found in this category.</p>
      ) : (
        <div className="row">
          {filteredStories.map(story => (
            <div className="col-md-4 mb-4" key={story.id}>
              <div className="card h-100 shadow-sm category-card">
                <img src={story.image} className="card-img-top" alt={story.title} />
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">{story.excerpt}</p>
                  <Link to={`/story/${story.id}`} className="btn btn-outline-warning btn-sm">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
