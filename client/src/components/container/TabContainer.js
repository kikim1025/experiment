import { connect } from 'react-redux';
import { changeTab } from '../../redux/actions';
import Tab from '../presentational/Tab';

const mapStateToProps = (state) => {
    return {
        currTab: state.currTab
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (payload) => dispatch(changeTab(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Tab);