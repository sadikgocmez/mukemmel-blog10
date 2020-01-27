import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";


const Home = ({ posts }) => (

  <body>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
                    </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container-fluid">

      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        </link>
      </Head>

      <div className="hero">
        <h1 className="hero-title">SADIK G.</h1>
        <div className="hero-social-links">
          <Link href="https://www.instagram.com/sadkholmes/?hl=en">
            <a className="social-link">Instagram</a>
          </Link>
        </div>
      </div>


      <div className="row">

        <div className="col-md-3">



        </div>

        <div className="col-md-6">

        {posts.map(post => (
        <div class="" className="blog">
          <h2 className="blog-title">
            <Link href={post.slug}>
              <a className="blog-title-link">{post.title}</a>
            </Link>
          </h2>
          <div className="blog-text">
            <ReactMarkdown source={post.details} />
          </div>
          <div className="blog-date">{post.date}</div>


        </div>

      ))}


        </div>
        <div className="col-md-3">



        </div>

      </div>

    </div>
          {/* footer */}
          <div>
        <footer className="bg-success">

          <div className="col-md-12">
            <p className="text-center">made by sadkholmes</p>

          </div>
        </footer>
      </div>
  </body>

);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://mukemmel-blog10.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};


export default Home;
