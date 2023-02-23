import React from "react";
import Layout from "../components/Layout";

export { Page };

function Page() {
  return (
    <Layout>
      <div
        className="p-8 w-full flex flex-col items-center py-36"
        style={{
          backgroundSize: "70px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='40' viewBox='0 0 50 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2328215e' fill-opacity='0.4'%3E%3Cpath d='M40 10L36.67 0h-2.11l3.33 10H20l-2.28 6.84L12.11 0H10l6.67 20H10l-2.28 6.84L2.11 10 5.44 0h-2.1L0 10l6.67 20-3.34 10h2.11l2.28-6.84L10 40h20l2.28-6.84L34.56 40h2.1l-3.33-10H40l2.28-6.84L47.89 40H50l-6.67-20L50 0h-2.1l-5.62 16.84L40 10zm1.23 10l-2.28-6.84L34 28h4.56l2.67-8zm-10.67 8l-2-6h-9.12l2 6h9.12zm-12.84-4.84L12.77 38h15.79l2.67-8H20l-2.28-6.84zM18.77 20H30l2.28 6.84L37.23 12H21.44l-2.67 8zm-7.33 2H16l-4.95 14.84L8.77 30l2.67-8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <img
          src="/FABL_IconLogo.svg"
          className="max-h-40 shrink-0 aspect-square"
        />
        <div className="text-4xl sm:text-5xl mt-4 mb-2 font-bold flex-wrap text-center justify-center flex items-center gap-3">
          <span>Welcome to</span>
          <img src="/FABL_TextLogo.svg" className="h-7 sm:h-9" />
        </div>
        <div className="text-2xl text-center">
          The first ever{" "}
          <i className="font-semibold text-fabl-pink">free agent major</i>.
        </div>
      </div>
    </Layout>
  );
}
