import { useEffect, useState } from 'react';
import './App.css';
import { getAllCocktail } from './utils/cocktail';
import Card from './Card/Card.js';

function App() {
  const initialURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [imgURL ,setImgURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [cocktailData, setCocktailData] = useState([]);

  useEffect(() =>{
    const fetchCocktailData = async() => {
      let res = await getAllCocktail(initialURL);
      console.log(res);
      //カクテルデータ配列を渡す
      // await loadCocktail(res.drinks);
      // console.log(res.drinks[0].strDrink);
      setCocktailData(res);
      setLoading(false);
    };
    fetchCocktailData();
  }, [])

  const loadCocktail = async (data) => {
    let _cocktailData = await Promise.all(

         <div className="cocktailCardContainer">
          return <Card cocktail={data} />;
        </div>
        
        // return cockRec;
      
    );
    // setCocktailData(_cocktailData);
  };

  return (
    <div className="App">
      {loading ? (<h1>ロード中・・・</h1>) :
      (
        <>
          <div className="cocktailCardContainer">
            <Card cocktail={cocktailData} />
          </div>
            <div className="btn">
              {/* <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button> */}
            </div>
        </>
      )}
      
    </div>
  );
}

export default App;
