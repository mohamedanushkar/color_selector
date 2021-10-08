import { useEffect , useState , useRef} from 'react';

const Color = ({onClick , bg , id}) => {

    const [cordinates, setCordinates] = useState([]);
    const element = useRef();

    useEffect(() => {
        const X = element.current.getBoundingClientRect().x;
        const Y = element.current.getBoundingClientRect().y;
    
        setCordinates({
          x: Math.round(X) ,
          y: Math.round(Y)
        });
    }, []);

    return (
        <>
            <div className='Ball' ref={element} onClick={ () => onClick (id)} style={bg}> 
                <p>X:{cordinates.x}<br/>Y:{cordinates.y}</p>
            </div>
        </>
    )
}


export default Color
