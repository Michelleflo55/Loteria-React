import './laptop.styles.css'

export const Laptop = () => {
    return (
        <div className='laptop'>
            <p>Whoops! I am in laptop mode.</p>
            <p>But if you see anything below me, I am now in Big Screen mode</p>
            <MediaQuery minDeviceWidth={1224}>
                <p>Manipulate me with the powers of React Responsive</p>
            </MediaQuery>
        </div>
    )
}