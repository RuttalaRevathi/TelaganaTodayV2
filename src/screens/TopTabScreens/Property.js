/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getPropertyAction from '../../redux/actions/getPropertyAction';


const PropertyScreen = ({
    navigation,
    propertyData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPropertyAction('property'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {propertyData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="property"
        />
    );
};

type Props = {
    propertyData: Function,
};
const mapStateToProps = state => ({
    propertyData: state.propertyReducer?.propertyData,
});
const mapDispatchToProps = {
    getPropertyAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);
