import React from 'react';
import './Authors.css';
import { Link } from 'react-router-dom';
const authors = [
    {
        id: 1,
        name: "Amari Johnson",
        bio: "Known for weaving philosophical depth into his stories of identity and purpose.",
        image: "https://images.pexels.com/photos/8730854/pexels-photo-8730854.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 5
    },
    {
        id: 2,
        name: "Min-Jun Lee",
        bio: "Explores futuristic worlds and AI through human emotion and imagination.",
        image: "https://images.pexels.com/photos/9757553/pexels-photo-9757553.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 4
    },
    {
        id: 3,
        name: "Sebastian Vogel",
        bio: "Brings 19th-century Europe to life through romance and historical intrigue.",
        image: "https://images.pexels.com/photos/12077463/pexels-photo-12077463.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 3
    },
    {
        id: 4,
        name: "Elias Marlowe",
        bio: "A noir mystery specialist with a poetic and classic detective style.",
        image: "https://images.pexels.com/photos/3091193/pexels-photo-3091193.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 6
    },
    {
        id: 5,
        name: "Daniel Turner",
        bio: "Thriller writer blending suspense with powerful social commentary.",
        image: "https://images.pexels.com/photos/8035281/pexels-photo-8035281.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 5
    },
    {
        id: 6,
        name: "Oliver Clarke",
        bio: "Witty humorist whose works turn daily life into comedic gold.",
        image: "https://images.pexels.com/photos/6333662/pexels-photo-6333662.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 3
    },
    {
        id: 7,
        name: "Sora Kim",
        bio: "Romance writer inspired by nature, emotion, and quiet moments.",
        image: "https://images.pexels.com/photos/9222390/pexels-photo-9222390.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 7
    },
    {
        id: 8,
        name: "Aiko Suzuki",
        bio: "YA fiction writer exploring youth, identity, and friendship.",
        image: "https://images.pexels.com/photos/7120923/pexels-photo-7120923.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 4
    },
    {
        id: 9,
        name: "Kwame Jones",
        bio: "Inspires readers with personal stories and motivational guidance.",
        image: "https://images.pexels.com/photos/9297454/pexels-photo-9297454.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 6
    },
    {
        id: 10,
        name: "Talisa Brown",
        bio: "Heartfelt family dramas rooted in rich Southern heritage.",
        image: "https://images.pexels.com/photos/7982898/pexels-photo-7982898.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 5
    },
    {
        id: 11,
        name: "Dr. Robert Kincaid",
        bio: "Nonfiction author bridging cultures, history, and philosophy.",
        image: "https://images.pexels.com/photos/7317902/pexels-photo-7317902.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 4
    },
    {
        id: 12,
        name: "Maria Rossi",
        bio: "Memoirist and poet blending personal emotion with lyrical imagery.",
        image: "https://images.pexels.com/photos/8809557/pexels-photo-8809557.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 3
    },
    {
        id: 13,
        name: "Janet Porter",
        bio: "Children’s author known for magical tales and colorful characters.",
        image: "https://images.pexels.com/photos/17153163/pexels-photo-17153163.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 6
    },
    {
        id: 14,
        name: "Henry Drake",
        bio: "Contemporary urban writer drawing meaning from modern chaos.",
        image: "https://images.pexels.com/photos/27045934/pexels-photo-27045934.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 4
    },
    {
        id: 15,
        name: "Liang Chen",
        bio: "Sci-fi novelist exploring tech and society with emotional realism.",
        image: "https://images.pexels.com/photos/8117528/pexels-photo-8117528.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
        storiesCount: 5
    }
];


const Authors = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">✍️ Our Authors</h2>
            <div className="row">
                {authors.map((author) => (
                    <div className="col-md-3 col-sm-6 mb-4" key={author.id}>
                        <div className="card h-100 author-card shadow-sm">
                            <img src={author.image} className="card-img-top author-img" alt={author.name} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{author.name}</h5>
                                <p className="card-text">{author.bio}</p>
                                <p className="text-muted fw-bold">{author.storiesCount} stories</p>
                                {/* Optional: Link to author page */}
                                <Link to={`/author/${author.id}`} className="btn btn-outline-primary btn-sm">View Profile</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Authors;
