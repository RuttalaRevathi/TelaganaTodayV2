/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getApAction from '../../redux/actions/getApAction';
import CategoryUI from '../../components/CategoryUI';


const ApScreen = ({
    navigation,
    apData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApAction('andhra-pradesh'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {apData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="andhra-pradesh"
        />
    );
};

type Props = {
    apData: Function,
    apLoading: Boolean,
};
const mapStateToProps = state => ({
    apData: state.apReducer?.apData,
    apLoading: state.apReducer?.apLoading,
});
const mapDispatchToProps = {
    getApAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ApScreen);
