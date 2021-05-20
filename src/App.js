import {useState,useEffect} from 'react'
import './App.css';
import ReactPlayer from 'react-player'
import axios from 'axios'
import { FaEyeSlash } from "react-icons/fa";
import {Howl} from 'howler'

let radios = [
    {
        city:'Korea',
        sound:'http://188.166.198.223/radio/8000/radio.mp3?listening-from-radio-garden=1617539518811',
        name:'Seoul Community Radio'
    },
    {
        city:'Korea',
        sound:'http://radio.garden/api/ara/content/listen/Fxz_MBpC/channel.mp3?1617539935129',
        name:'WBS FM 89.7'
    },
    {
        city:'Korea',
        sound:'https://s3.radio.co/s22189b87c/listen?listening-from-radio-garden=1617539955954',
        name:'Yahweh Radio'
    },
    {
        city:'Istanbul',
        sound:'https://radio.garden/api/ara/content/listen/mMydWNaS/channel.mp3?1617540037964',
        name:'Power Pop 101.00'
    },
    {
        city:'Istanbul',
        sound:'http://radio.garden/api/ara/content/listen/UY2qIZUm/channel.mp3?1617540076690',
        name:'Radio Goldies'
    },
    {
        city:'Tokyo',
        sound:'https://radio.garden/api/ara/content/listen/XehO7lZ3/channel.mp3?1617540242848',
        name:"Listen.moe"
    },
    {
        city:'Tokyo',
        sound:'https://radio.garden/api/ara/content/listen/B-ro2l-v/channel.mp3?1617540264948',
        name:"Radio Eigekai Indies"
    },
    {
        city:'Tokyo',
        sound:'https://radio.garden/api/ara/content/listen/N8swKvhv/channel.mp3?1617540363823',
        name:"Súper Tokio Radio"
    },
    {
        city:'Tokyo',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },

    {
        city:'Moscow',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Manhattan',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Las Vegas',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Mannlichen',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Roma',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Time Square',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Mexico',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Hawaii',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Shibuya',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Vancouver',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'St Petersburg',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Nature',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'London',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Paris',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Bali',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
    {
        city:'Disney',
        sound:'https://radio.garden/api/ara/content/listen/NNN4xTQx/channel.mp3?1617540390357',
        name:"Wave Anime Radio"
    },
]

function App() {

    let soundPlay = (src) =>{
        const sound = new Howl({
            src,
            html5:true
        })
        sound.play()
    }
   
  const [citiesButtons, setCitiesButtons] = useState(false);
 
    const [video, setVideo] = useState({
    data:[],
    currentVideo:'https://www.youtube.com/embed/wi_3WwCvzo8',
    muted:true,
    fullScreen:false
})


  useEffect(() => {
    axios.get('https://walkandlisten-5e271-default-rtdb.firebaseio.com/walk/-MXNmGQma7kK1VZ4uXUk.json')
    .then((res)=>{
        setVideo((prev)=>({
            ...prev,
            data:res.data
        })) 
    })
  }, [])

    

    function openCities() { 
        setCitiesButtons(!citiesButtons)
        // let data = [
        //     {
        //         button:'Tokyo',
        //         name:'tokyo',
        //         video:'https://www.youtube.com/embed/Et7O5-CzJZg'
        //     },
        //     {
        //         button:'Moscow',
        //         name:'moscow',
        //         video:'https://www.youtube.com/embed/wi_3WwCvzo8'
        //     },
        //     {
        //         button:'Istanbul',
        //         name:'istanbul',
        //         video:'https://www.youtube.com/embed/SNkdN97hXzw'
        //     },
        //     {
        //         button:'Manhattan',
        //         name:'manhattan',
        //         video:'https://www.youtube.com/embed/eZe4Q_58UTU'
        //     },
        //     {
        //         button:'Las Vegas',
        //         name:'lasvegas',
        //         video:'https://www.youtube.com/embed/qEXZQbNw7Kc'
        //     },
        //     {
        //         button:'Mannlichen ',
        //         name:'mannlichen ',
        //         video:'https://www.youtube.com/embed/zsp2XG8lPyw'
        //     },
        //     {
        //         button:'Rome ',
        //         name:'rome ',
        //         video:'https://www.youtube.com/embed/EsFheWkimsU'
        //     },
        //     {
        //         button:'Times Square ',
        //         name:'Times Square ',
        //         video:'https://www.youtube.com/embed/F8MN0o6RS9o'
        //     },
        //     {
        //         button:'MEXICO',
        //         name:'MEXICO',
        //         video:'https://www.youtube.com/embed/ER_szwLxHYk'
        //     },
        //     {
        //         button:'Hawaii',
        //         name:'Hawaii',
        //         video:'https://www.youtube.com/embed/SYIEFsP8Hy0'
        //     },
        //     {
        //         button:'Shibuya',
        //         name:'Shibuya',
        //         video:'https://www.youtube.com/embed/0nTO4zSEpOs'
        //     },
        //     {
        //         button:'Vancouver',
        //         name:'Vancouver',
        //         video:'https://www.youtube.com/embed/lh8dNmneVyY'
        //     },
        //     {
        //         button:'St. Petersburg',
        //         name:'St. Petersburg',
        //         video:'https://www.youtube.com/embed/i-N1yioePAQ'
        //     },
        //     {
        //         button:'Nature',
        //         name:'Nature',
        //         video:'https://www.youtube.com/embed/ynLpZGegiJE'
        //     },
        //     {
        //         button:'London',
        //         name:'London',
        //         video:'https://www.youtube.com/embed/__Eo-dvEH7g'
        //     },
        //     {
        //         button:'Paris',
        //         name:'Paris',
        //         video:'https://www.youtube.com/embed/Y5TNhAMEm5g'
        //     },
        //     {
        //         button:'Bali',
        //         name:'Bali',
        //         video:'https://www.youtube.com/embed/5p5FoQR8wTM'
        //     },
        //     {
        //         button:'Nice',
        //         name:'Nice',
        //         video:'https://www.youtube.com/embed/5KWEjn839lc'
        //     },
        //     {
        //         button:'Istanbul Taksim',
        //         name:'Istanbul Taksim',
        //         video:'https://www.youtube.com/embed/IQH9krST07Y'
        //     },
        //     {
        //         button:'Berlin',
        //         name:'Berlin',
        //         video:'https://www.youtube.com/embed/hyNG-vAtu3U'
        //     },
        //     {
        //         button:'Disney',
        //         name:'Disney',
        //         video:'https://www.youtube.com/embed/M-3cS51G6oQ'
        //     },
        // ]
        // axios.post('https://walkandlisten-5e271-default-rtdb.firebaseio.com/walk.json',data)
        // .then((res)=>{
        //     console.log(res.data);
        // })
    }

    function changeVideo(city){
        video.data.map((item)=>{
            if(city === item.name){
                setVideo((prev)=>({
                    ...prev,
                    currentVideo:item.video
                }))
            }
            return 0
        })

        
        
    }


    function videoSound() {  
        setVideo((prev)=>({
            ...prev,
            muted:!video.muted
        }))
        soundPlay('')
    }

    function fullScreen() {  
        setVideo((prev)=>({
            ...prev,
            fullScreen:!video.fullScreen
        }))
    }

  return (
    <div className="App">
      <div className='drive_page'>
            <button className='fullScreen' onClick={fullScreen}><FaEyeSlash/></button>
            <div className={`selectbox ${video.fullScreen && 'dnone'}`}>
                <h1 onClick={openCities}>Chose City</h1>
                <div className={`cities animate__animated animate__bounceIn  ${citiesButtons && 'open'}`}>
                    {video.data.map((button,index)=>{
                        return <button key={index} onClick={()=>changeVideo(button.name)}>{button.button}</button>
                    })}

                    <br/>
                </div>
                <div className='controls'>
                    <button onClick={videoSound}>Video sound {!video.muted ? 'OFF' : 'ON'}</button>
                </div>
            </div>
            <div className="video-background">
              <div className="video-foreground">
              <ReactPlayer muted={video.muted} playing={true} url={`${video.currentVideo}?autoplay=1&mute=1&controls=0&start=180&playsinline=1&rel=0&showinfo=0&enablejsapi=1&widgetid=1`} />
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
