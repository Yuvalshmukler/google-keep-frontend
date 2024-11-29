import { useSelector } from 'react-redux'

export function ColorPalette({ onClickColor }) {
    const colors = [
        '#FF6F61',
        '#6B5B95',
        '#88B04B',
        '#F7CAC9',
        '#92A8D1',
        '#F5D76E',
        '#E94B3C',
        '#4AA3DF',
        '#B565A7',
        '#5B8C5A',
        '#FFB347',
        '#A2C5AC',
    ];
    const imgs = [
        '#FF6F61',
        '#6B5B95',
        '#88B04B',
        '#F7CAC9',
        '#92A8D1',
        '#F5D76E',
        '#E94B3C',
        '#4AA3DF',
        '#B565A7',
        '#5B8C5A',
    ];

    // const count = useSelector(storeState => storeState.userModule.count)

    return (
        <section className="ColorPalette">
            <section>
                {colors.map((color) => (
                    <button
                        key={color}
                        style={{ backgroundColor: color }}
                        onClick={(event) => onClickColor(color)}
                    >
                    </button>
                ))}
            </section>
            <section>
                {imgs.map((color) => (
                    <button
                        key={color}
                        style={{ backgroundColor: color }}
                        onClick={(event) => onClickColor(event, color)}
                    >
                    </button>
                ))}
            </section>

        </section>
    )
}