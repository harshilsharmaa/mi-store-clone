import React, {useState, useEffect} from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOptions.css'




const NavOptions = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home, audio,accessories}) => {

    const [miPhoneToogle, setmiPhoneToogle] = useState(false);
    const [redmiPhonesToogle, setredmiPhonesToogle] = useState(false);
    const [tvToogle, settvToogle] = useState(false);
    const [laptopToogle, setlaptopToogle] = useState(false);
    const [fitnessAndLifeStyleToogle, setfitnessAndLifeStyleToogle] = useState(false);
    const [homeToogle, sethomeToogle] = useState(false);
    const [audioToogle, setaudioToogle] = useState(false);
    const [accessoriesToogle, setaccessoriesToogle] = useState(false);


    useEffect(() => {
      
        if(window.location.pathname==='/miphones'){
            return setmiPhoneToogle(true);
        }
        if(window.location.pathname==='/redmiphones'){
            return setmiPhoneToogle(true);
        }
        if(window.location.pathname==='/tv'){
            return settvToogle(true);
        }
        if(window.location.pathname==='/laptops'){
            return setlaptopToogle(true);
        }
        if(window.location.pathname==='/fitness'){
            return setfitnessAndLifeStyleToogle(true);
        }
        if(window.location.pathname==='/home'){
            return sethomeToogle(true);
        }
        if(window.location.pathname==='/audio'){
            return setaudioToogle(true);
        }
        if(window.location.pathname==='/accessories'){
            return setaccessoriesToogle(true);
        }
    
    }, [])
    


  return (

    <div className="navOptions">
        {miPhoneToogle ? miPhones.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}

        {redmiPhonesToogle ? redmiPhones.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}

        {tvToogle ? tv.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}

        {laptopToogle ? laptop.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}

        {fitnessAndLifeStyleToogle ? fitnessAndLifeStyle.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}

        {homeToogle ? home.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}

        {audioToogle ? audio.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        {accessoriesToogle ? accessories.map((item,index)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        
    </div>
  )
}

export default NavOptions