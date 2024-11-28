import { useSelector } from 'react-redux'

export function ColorPalette() {
    // const count = useSelector(storeState => storeState.userModule.count)
    function onClickColor(event){
        console.log(event);
        //מערך של צבעים 
    }
    return (
        <section className="ColorPalette">
            <section>
                <button onClick={onClickColor}></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </section>
            <section>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </section>
        </section>
    )
}