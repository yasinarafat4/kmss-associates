import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Services = () => {
  return (
    <Container>
      <SectionTitle heading={"Our Services"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* service-1 */}
        <Link className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8">
          <img
            className="w-16"
            src="https://i.ibb.co/rpMhq5H/pngtree-check-mark-icon-png-image-3566317.jpg"
            alt="lorem-icon"
          />
          <div>
            <h2 className="font-semibold text-base xl:text-lg">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              labore corporis!{" "}
            </p>
          </div>
        </Link>
        {/* service-2 */}
        <Link className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8">
          <img
            className="w-16"
            src="https://i.ibb.co/rpMhq5H/pngtree-check-mark-icon-png-image-3566317.jpg"
            alt="lorem-icon"
          />
          <div>
            <h2 className="font-semibold text-base xl:text-lg">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              labore corporis!{" "}
            </p>
          </div>
        </Link>
        {/* service-3 */}
        <Link className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8">
          <img
            className="w-16"
            src="https://i.ibb.co/rpMhq5H/pngtree-check-mark-icon-png-image-3566317.jpg"
            alt="lorem-icon"
          />
          <div>
            <h2 className="font-semibold text-base xl:text-lg">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              labore corporis!{" "}
            </p>
          </div>
        </Link>
        {/* service-4 */}
        <Link className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8">
          <img
            className="w-16"
            src="https://i.ibb.co/rpMhq5H/pngtree-check-mark-icon-png-image-3566317.jpg"
            alt="lorem-icon"
          />
          <div>
            <h2 className="font-semibold text-base xl:text-lg">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              labore corporis!{" "}
            </p>
          </div>
        </Link>
        {/* service-5 */}
        <Link className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8">
          <img
            className="w-16"
            src="https://i.ibb.co/rpMhq5H/pngtree-check-mark-icon-png-image-3566317.jpg"
            alt="lorem-icon"
          />
          <div>
            <h2 className="font-semibold text-base xl:text-lg">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              labore corporis!{" "}
            </p>
          </div>
        </Link>
        {/* service-6 */}
        <Link className="flex items-center gap-2 shadow-lg rounded-md px-2 py-4 xl:px-4 xl:py-8">
          <img
            className="w-16"
            src="https://i.ibb.co/rpMhq5H/pngtree-check-mark-icon-png-image-3566317.jpg"
            alt="lorem-icon"
          />
          <div>
            <h2 className="font-semibold text-base xl:text-lg">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              labore corporis!{" "}
            </p>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Services;
