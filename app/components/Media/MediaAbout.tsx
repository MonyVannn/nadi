function MediaAbout() {
  return (
    <section id="about" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              About GC Media and Our Approach{" "}
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              GC media is an advertising media company focusing on high-end
              media operation strongly built by GCC, having rich media resources
              and core advantages businesses, including brand image promotion,
              advertising production and promotion, event banquet, etc. Under
              our all-round and highly efficient media development framework,
              combined with senior local media team, we build a multi-market
              media business system.
            </p>
          </div>
          <video
            src="https://gcc-gp.com/wp-content/uploads/2021/03/GC-MEDIA_V3.mp4"
            autoPlay
            muted
            loop
            controls
            className="w-full h-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default MediaAbout;
