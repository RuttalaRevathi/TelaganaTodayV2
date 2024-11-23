/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getColumunsAction from '../../redux/actions/getColumunsAction';


const ColumunsScreen = ({
    navigation,
    columunsData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getColumunsAction('columns'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {columunsData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="columns"
        />
    );
};

type Props = {
    columunsData: Function,
};
const mapStateToProps = state => ({
    columunsData: state.columunsReducer?.columunsData,
});
const mapDispatchToProps = {
    getColumunsAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ColumunsScreen);
