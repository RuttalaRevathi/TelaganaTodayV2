/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getViewpointAction from '../../redux/actions/getViewpointAction';


const ViewpointScreen = ({
    navigation,
    viewpointData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getViewpointAction('opinion'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {viewpointData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="opinion"
        />
    );
};

type Props = {
    viewpointData: Function,
};
const mapStateToProps = state => ({
    viewpointData: state.viewpointReducer?.viewpointData,
});
const mapDispatchToProps = {
    getViewpointAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewpointScreen);
