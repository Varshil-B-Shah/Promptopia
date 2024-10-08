import Feed from "@components/Feed";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
    <link href="/favicon.ico" sizes="any" rel="icon"/>
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
      <Footer />
    </section>
  );
};

export default Home;
