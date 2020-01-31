import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ post }) => (
  <body>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="http://localhost:3000">Anasayfa</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Bana Dair</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Bişeyler <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Başka Bişeyler</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="admin.js">Admin Panel</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">iletişim</a>
          </li>

        </ul>
      </div>
    </nav>
    <br></br>
    <br></br>

    


    <div className="container-fluid">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

      </Head>

      <div className="hero">
        <h1 className="hero-title">Sadkholmes</h1>
        <div className="hero-social-links">
          <Link href="../components/about.js">
            <a className="social-link">Instagram</a>
          </Link>
        </div>
      </div>

      <div className="row">

        <div className="col-md-9">

          <div className=" card-body blog">
            <h2 className="blog-title">
              <Link href="/test">
                <Link className="blog-title-link">{post.title}</Link>
              </Link>
            </h2>
            <div className="blog-text">
              <ReactMarkdown source={post.details} />
            </div>
            <div className="blog-date">{post.date}</div>
          </div>

        </div>

        <div className="col-md-3">
          <div className="card" styleName="width: 18rem;">
            <img src="CVLZ3166.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <br></br>
          <div className="card" styleName="width: 18rem;">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <br></br>
          <div className="card" styleName="width: 18rem;">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>

      </div>





    </div>

    <footer className="page-footer font-small blue">

      <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> By Sadkholmes</a>
      </div>

    </footer>
  </body>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
