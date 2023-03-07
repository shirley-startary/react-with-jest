import PropTypes from 'prop-types';

const FirstApp = ({title, subTitle, name}) => {
  return (
    <>
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  )
}

FirstApp.prototype = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Shirley Suarez',
    subTitle:'No hay subtítulo',
    title: 'No hay título'
}

export default FirstApp;