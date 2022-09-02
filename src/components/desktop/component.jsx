import './desktop.styles.css'

export const Desktop = () => {
    return (
        <div className='desktop'>
            <p> Whoops! I am in desktop mode.</p>
            <p> But if you see anything below me, I am now in Laptop mode </p>
            <MediaQuery minDeviceWidth={1224}>
                <p>Manipulate me with the powers of React Responsive</p>
            </MediaQuery>
        </div>
    )
}