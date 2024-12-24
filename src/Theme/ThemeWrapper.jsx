import UseAuth from "../AuthProvider/UseAuth";
import PropTypes from 'prop-types'

const ThemeWrapper = ({children}) => {

    const {theme} = UseAuth();
    return (
        <div data-theme={theme}>
            {children}
        </div>
    );
};

ThemeWrapper.propTypes = {
    children: PropTypes.object
}

export default ThemeWrapper;