import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.agency09.in/simplifyingtheweb/api/blogs.php?per_page=3")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <section className="home-blogs">
      <div className="container">
        <h2>Latest Blogs</h2>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                />
              )}

              <h3>{blog.title}</h3>

              <div
                className="excerpt"
                dangerouslySetInnerHTML={{
                  __html: blog.excerpt,
                }}
              />

              <Link
                to={blog.permalink}
                className="read-more"
                >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center center">
          <Link to="https://www.agency09.in/simplifyingtheweb" className="view-all">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeBlogs;
