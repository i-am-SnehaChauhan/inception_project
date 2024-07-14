import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../common/Chip";
import { GithubFilled } from "@ant-design/icons";
import "./styles.css";

const BlogItem = ({
  blog: { description, title, cover, category, id, backgroundColor },
}) => {
  return (
    <div className="blogItem-wrap" style={{ backgroundColor }}>
      <img className="blogItem-cover" src={cover} alt="cover" />
      <div className="w-full pr-5 py-[20px] flex justify-between items-end ">
        <Chip className="blogItem-chip" label={category} />
        <span>
          <a
            href="https://github.com/your-repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled style={{ fontSize: "24px", color: "#000" }} />
          </a>
        </span>
      </div>

      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          Read Here
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
