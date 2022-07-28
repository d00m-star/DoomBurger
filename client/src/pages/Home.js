const Home = () => {
  return (
    <div className="home-container">
      <div className="home-top">
        <h3>Home of the Doom Burger</h3>
      </div>
      <div className="home-image-container">
        <img
          id="home-image"
          src="https://www.lacademie.com/wp-content/uploads/2021/04/black-burger.webp"
        ></img>
      </div>
      <div className="home-bottom">
        <div className="reviews"></div>
      </div>
    </div>
  )
}

export default Home
