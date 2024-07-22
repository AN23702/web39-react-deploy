import "./assets/styles.css"

const App = () => {
  const name = "An";
  const url_image = "./images.jpg";
  const rate = 5;
  const style = {color:"red"};

  // Khai bao Fn xu ly thong bao
  const handleAlert = () => {
    alert("hihi");
  }

  return (
    <>
      <h1 className={`title-${rate}`} style={style}>hello {name}</h1>
      <p className="description">xin chao</p>
      <img src={url_image} alt="anh meo" />
      <br/>

      {/* event react */}
      <button onClick={handleAlert}>Thong bao</button>

      <button onClick={()=> alert("hoho")}>click di em</button>
    </>
  )
}

export default App;
