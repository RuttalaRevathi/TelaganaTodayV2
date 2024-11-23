/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getHyderabadAction from '../../redux/actions/getHyderabadAction';
import CategoryUI from '../../components/CategoryUI';


const HyderabadScreen = ({
    navigation,
    hyderabadData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHyderabadAction('hyderabad'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {hyderabadData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="hyderabad"
        />
    );
};

type Props = {
    hyderabadData: Function,
};
const mapStateToProps = state => ({
    hyderabadData: state.hyderabadReducer?.hyderabadData,
});
const mapDispatchToProps = {
    getHyderabadAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(HyderabadScreen);
