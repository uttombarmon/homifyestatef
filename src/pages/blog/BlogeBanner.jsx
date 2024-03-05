const BlogeBanner = () => {
    return (
        <>
        <section
        className="bg-gray-100 mb-12  h-[320px] md:h-[350px]  relative border-4 grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 380px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/z5QV2NY/breadcrumbs-bg.jpg)",
        }}
      >
        <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[10%] absolute">
          <h1 className=" xl:text-5xl text-3xl "> Blog Details </h1>
        </div>
      </section>
        </>
    );
};

export default BlogeBanner;