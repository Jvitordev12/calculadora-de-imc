import { useState } from 'react';
import  styles  from './App.module.css';
import poweredImage from './assets/powered.png'
import { levels, imcCalculate, Level } from './helpers/imc';
import { GridItem } from './components/gridItens';

const App = () => {


  const [heightFild, setHeightFild] = useState<number>(0);
  const [weightFild, setWeightFild] = useState<number>(0);
  const [showItem, setShowItem] = useState<null | Level>(null)

  function HandleCalculateButton(){
    if( heightFild && weightFild){
      setShowItem(imcCalculate(heightFild, weightFild));
    }else{
      alert("preencha os 2 campos")
    }
  }


  return(
    <div className={styles.main}>
      <header>
         <div className={styles.headerContainer} >
           <img src={poweredImage} alt="poweredImage" width={150}/>
         </div>
      </header>
     <div className={styles.container}>


      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>O IMC, ou Índice de Massa Corporal, é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.</p>
        <input type="number" placeholder='digite sua altura em metros ex. 1.80 ' value={ heightFild > 0 ? heightFild : ''} onChange={(e) => setHeightFild(parseFloat(e.target.value))} />
        <input type="number" placeholder='digite seu peso em kg ex. 80' value={ weightFild > 0 ? weightFild : ''} onChange={(e) => setWeightFild(parseFloat(e.target.value))}  />
        <button onClick={HandleCalculateButton}>calcular</button>
      </div>


      {!showItem && 
       <div className={styles.rightSide}>
        <div className={styles.grid}>
          {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
          ))}
        </div>
      </div>}
      

      {showItem && <div className={styles.showBig}>
        <div className={styles.rightArrow}></div>
          <GridItem item={showItem} />
      </div>} 
      
    
     </div></div>);}

export default App;
