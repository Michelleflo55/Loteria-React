import './mobile.styles.css'

export const Mobile = () => {
    return (
        <div className='mobile'>
            {/* <p> Whoops! I'm in mobile mode.</p> */}
            <MediaQuery minDeviceWidth={1224}>
                <p>Manipulate me with the powers of React Responsive</p>
            </MediaQuery>
        </div>
    )
}