import './tablet-mobile.styles.css'

export const TabletMobile = () => {
    return (
        <div className='tablet-mobile'>
            <p> Whoops! I am in tablet-mobile mode.</p>
            <p> But if you see anything below me, I am now in Desktop mode</p>
            <MediaQuery minDeviceWidth={1224}>
                <p>Manipulate me with the powers of React Responsive</p>
            </MediaQuery>
        </div>
    )
}