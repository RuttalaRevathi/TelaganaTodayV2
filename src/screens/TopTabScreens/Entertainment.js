/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getEntertainmentAction from '../../redux/actions/getEntertainmentAction';


const EntertainmentScreen = ({
    navigation,
    entertainmentData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEntertainmentAction('entertainment'));

    }, []);
    
    return (
        <CategoryUI
        data = {entertainmentData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="entertainment"
        />
    );
};

type Props = {
    entertainmentData: Function,
};
const mapStateToProps = state => ({
    entertainmentData: state.entertainmentReducer?.entertainmentData,
});
const mapDispatchToProps = {
    getEntertainmentAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(EntertainmentScreen);
