import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";



const Home = ({ posts }) => (

  <body>

    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="http://mukemmel-blog10.herokuapp.com">Anasayfa</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="../src/about.js">Bana Dair<span className="sr-only">(current)</span></a>
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
            <a className="nav-link" href="">iletişim</a>
          </li>

        </ul>
      </div>
    </nav>
    <br></br>
    <br></br>

    <div className="row">


      <div className="col-md-4">
        

        {/* logo olabilir */}
      </div>
      <div className="col-md-8">

        <div className="jumbotron jumbotron-fluid bg-white">
          <div className="container">
            <h1 className="display-4">Sadkholmes </h1><Link href="https://www.instagram.com/sadkholmes/?hl=tr">
              <a className="social-link"> Sadkholmes&İnstagram</a>
            </Link>
            <p className="lead">Burada kodlama öğrenme sürecime dair yazılar bulacaksınız. Bulamıyorsanız, bu kodlama öğrenemediğim anlamına gelir ve sanal dünya çöplüğünde yerimi almış olurum. Sevgiler... </p>
          </div>
        </div>

      </div>


    </div>



    <div className="container-fluid">

      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      </Head>






      <div className="row">


        <div className="col-md-9">


          {posts.map(post => (
            <div className="card-body blog">
              <h2 className="blog-title">
                <Link href={post.slug}>
                  <a className="blog-title-link">{post.title}</a>
                </Link>
              </h2>
              <div className="blog-text">

                <ReactMarkdown source={post.ozet} />
                <Link href={post.slug}>
                  <a className="blog-title-link">Devamını Oku</a>
                </Link>
              </div>
              <div className="blog-date">{post.date}</div>


            </div>

          ))}
          <br></br>
          <br></br>



        </div>
        <div className="col-md-3">
          <div className="card" styleName="width: 18rem;">
            <div className="card-body">
              <h6 className="card-title">Setup'a bas </h6>
              <p className="card-text">sonra next next next. Bill GATES</p>
            </div>
          </div>
          <br></br>
          <div className="card" styleName="width: 18rem;">
            <div className="card-body">
              <h5 className="card-title">REKLAM</h5>
              <p className="card-text"> Yok yok, şimdilik o kadar da değil. </p>
            </div>
          </div>
          <br></br>
                </div>

      </div>

    </div>

    <footer className="page-footer font-small blue">

      <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.instagram.com/sadkholmes/?hl=en"> By Sadkholmes</a>
      </div>

    </footer>



  </body>

);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://mukemmel-blog10.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};


export default Home;
