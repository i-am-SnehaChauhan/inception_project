import { Link } from "react-router-dom";
import { GithubFilled } from "@ant-design/icons";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "GemHawk Adventures",
      imageUrl: "https://res.cloudinary.com/dzfutdgpr/image/upload/v1720955671/Screenshot_2024-07-14_164310_fzqckr.png",
    },
    {
      id: 2,
      name: "Tindog",
      imageUrl: "https://res.cloudinary.com/dzfutdgpr/image/upload/v1720957696/doggy_u6vzeo.jpg",
    },
    {
      id: 3,
      name: "Faculty-Feedback",
      imageUrl: "https://res.cloudinary.com/dzfutdgpr/image/upload/v1720959096/student-feedback-app_qxxuia.jpg",
    },
    {
      id: 4,
      name: "Travelling-Salesman-Problem",
      imageUrl: "https://res.cloudinary.com/dzfutdgpr/image/upload/v1720959545/tsp_la7t7i.png",
    },
  ];

  return (
    <div className="flex flex-col items-center md:gap-[50px] gap-[20px]">
      <h1 className="md:text-[38px] text-[20px] leading-[24px] md:leading-[46px]">
        Cutting-Edge Tech Projects
      </h1>

      <div className="sm:flex hidden flex-col items-center gap-[20px]">
        <div className="flex justify-center items-end md:gap-[50px] gap-[16px] flex-wrap">
          {products.map((elem) => (
            <div
              key={elem.id}
              className="flex flex-col items-start rounded-lg overflow-hidden relative group"
            >
              <div
                className="w-[283px] h-[368px] bg-cover bg-center"
                style={{ backgroundImage: `url(${elem.imageUrl})` }}
              ></div>
              <div className="w-full px-[20px] py-[20px] flex justify-between items-end absolute h-full bottom-0 opacity-0 group-hover:opacity-100 transition-all bg-gradient-to-b from-transparent to-black">
                <h1 className="text-[24px] leading-[32px] w-[140px] font-secondary text-white text-start">
                  {elem.name}
                </h1>
                <span>
                  <a
                    href="https://github.com/your-repository"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubFilled
                      style={{ fontSize: "24px", color: "#fff" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>

        <Link to={`products`}>
          <div className="flex items-center">
            <h2 className="w-[138px] underline font-semibold">
              View all products
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
