import './big-screen.styles.css'
import MediaQuery from 'react-responsive/types/Component'

export const BigScreen = () => {
    return (
        <div className='big-screen'>
            <p> Whoops! I'm in big screen mode.</p>
            <p> This is the base of the pyramid </p>
            <MediaQuery minDeviceWidth={1224}>
                <p>Manipulate me with the powers of React Responsive</p>
            </MediaQuery>
        </div>
    )
}