import spinner from './Loading_icon.gif'

export default () => {
    return (
        <div>
            <img
                src={spinner}
                alt="Loading..."
                style={{width: '200px', margin: ' 40px auto', display: 'block'}}>
            </img>
        </div>
    )
}