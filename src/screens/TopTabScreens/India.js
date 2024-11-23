/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getIndiaAction from '../../redux/actions/getIndiaAction';
import CategoryUI from '../../components/CategoryUI';


const IndiaScreen = ({
    navigation,
    indiaData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIndiaAction('india'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {indiaData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="india"
        />
    );
};

type Props = {
    indiaData: Function,
};
const mapStateToProps = state => ({
    indiaData: state.indiaReducer?.indiaData,
});
const mapDispatchToProps = {
    getIndiaAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(IndiaScreen);
